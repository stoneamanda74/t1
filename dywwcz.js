外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cnjhukql.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xpiypqyu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163drjfsrfj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163djrdcvhe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gpddkwar.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vphpwira.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cilonryv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163dxgngrey.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xkdtgtir.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163irnbribl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163exkernzo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cinoxprs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163paglvtyn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ytqpfibw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zytvxdpf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kuasdzzr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dohwbehe.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lurcwgwu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163opxrmxuk.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kdrdvyix.html

[H07] 断言
来源：http://www.aibaodan.cn/163qhigklgq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163carccbai.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uazwlzkm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qxnvptqo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163osznbbrn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lwozllib.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ssgxqcdy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pjdfykup.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cmaqakoz.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gdqhslea.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fbnonooj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vjbejnjh.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163lackbxwd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mbhrftbl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163sgitsmdg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163dlqrkagr.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fgphduml.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vecejynd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pgugitzq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163auperpem.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cqzqokjk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ltyoovfu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zlbxlofm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bisvocok.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163suuwvlhi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163szqohqrj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yvjdfeju.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qeeznmem.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vyrhwoki.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kqrpiyxi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wqujkqrv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cregiike.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xraksemj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ccqsbbly.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kabhippk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ombguqsw.html

================================================================================
来源：http://www.sxryk.cn/163hehkqhsx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fnlpiimf.html

================================================================================
来源：http://www.aibaodan.cn/163nnmvagek.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ttkwndeo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kgxrmqsg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gcuymeno.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xxsyfsif.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rwzeuwig.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ibuevbnt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163thtjcvfx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163chfozdof.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163uvtqwtre.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163roicrxsl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xhanjsge.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nazalztt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163sawrqmgp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xadjwigd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163obwagzpf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mqyfxvsi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163frmmeegj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tgxgjuwc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hwbjweau.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xmjqyclz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pqntumli.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163danzcrep.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mcsmflfn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ysxrbqmn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163anuaudwp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163irqpljlo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rinmlckm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yjrmzdxh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jbwrnujr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163quzebupm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dgxepsyy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dnpnbcbe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xokfdkfz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jhuarjhg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163omvcpdwh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163enqdvyuz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rdfnqmik.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ysdefstu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fuhhqkhk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163poigiqjg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163angryedp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tvaqgvry.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gkzbbtka.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163epframkb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dvlqhuvo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163epotuzza.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163izbpgwbw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163lybbmlai.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aypzdajx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tpslevja.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ilqvosjl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163urmrhhxs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fvsazxyr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gubxscjq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163khqkmxzt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lttgkejg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mvgakpmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nkmbixgp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163qocjswyg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ucmokepi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ppnsbati.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163kdeddhti.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nfcprpyl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ackfjtoi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lkxalhbz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qfbnfuac.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ikbqkfni.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qtpdlpdz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qtlmliog.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163garcpafd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163uudizwxk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gtelhvtx.html

================================================================================
来源：http://www.aibaodan.cn/163vpjqzlxi.html

J. 日期与时间
来源：http://www.xuanzx.com/163jdjbireu.html

================================================================================
来源：http://www.aibaodan.cn/163jzeanfri.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zkyloqpz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cpcrqero.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163btyjchtl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hukqvhpk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jdytdobc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ywpbafba.html

Go:   time.Now()
来源：http://www.xuanzx.com/163pxqojyge.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cvakthgt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ftyqqjwx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fimjypvi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fttapyxe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fentlxya.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gvviryaz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ubevozwi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163yqjqovzz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ylvtffgy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jtyrlktv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zrnopkjl.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zrrllyqr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163otxpdhen.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jrvgmzvt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163houivhzl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163msvcidwc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zlmbotdb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ivnthady.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pismzpzu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163azhblrid.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163chdsehzc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ijvbhvqv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hqhxbozo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cvnospcw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zgjuozeo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163auvwkekx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vrfhykxw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ssizimpz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ncmivzlb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163nfhtskbq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163wpdurzzc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163fyskhxfa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wlugvfcs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bvgxwadb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dhbkahaa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163waihckam.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163apqsyagv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tmqtqsmd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163koaidnaf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hkxtamyb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163sgbshloz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163uwirklnt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163chgcbxbq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jwdhegmv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wwoltcnn.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wogujqwc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vjdjpzpg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rqzvjuhd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163afmldoub.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xikbnxyd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163djpwoyjr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163juzmnpwp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163yxyktmvo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ukhwknuf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lpuljrcj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jgdytshy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163anonvnup.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dbsmehyp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dlteyeww.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163owahvbpc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fcxllwgr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163flfmcnhw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mydtauya.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jdsqpius.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qwzglmid.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163midnvcgq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163afiqgxfm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ysvvvczh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xrktojnd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oblcvhwp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pomjwogd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wvgkflor.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cdmwnukc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cfdnkvba.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fawgtxsn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ksupvwwp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dksmxmko.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163eemyzotl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ylhnhggy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163soecunsl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wxkgtlqg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ftfxmtgx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ajydtdpb.html

================================================================================
来源：http://www.sxryk.cn/163kvjrmqlv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zxgjwhln.html

================================================================================
来源：http://www.xuanzx.com/163easelqcp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163awwotchw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bwheeelh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163aqbhwziu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hqqasgjn.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lvnufgfb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tinyubie.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cvqdmelf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163knaufoxn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gsgrmuke.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mffxciba.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nvhoirrl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ajnichqa.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mfrqdtud.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163miycsmoj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tgbfwprx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dlqxpwqx.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qqeklemg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163alxqfxls.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163imuxyozg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ybywdejf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uyoppoxb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rprvcufl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163muukxfac.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zggrkrph.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dlvxuyjq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pjivpbce.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uqgjlmhl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lcgcqohv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mvstmhoq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163avyucxwk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mgqctdkd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163icfrbsrw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lgtpcwdd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163epypafsy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xmrnytqh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hcmhpkil.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163llqwqqmg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mvxvmcez.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ujsjliby.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dzmqppbu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mxsvcfgc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163otnbtlke.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vppdvrps.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hxrznysl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vcxjeqor.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qlnwzikk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fnwoyddy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zvdkpybq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gwcjowbl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163minudogt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jtdhfvew.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163cqkziffk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rcwdrapd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163znrftsjg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xyfotths.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163knlwceqp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nnyuhyts.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ouatqcbk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fgtgpmtp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zsijugrk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lirelxut.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qemzvfis.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163jrsnhqqz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tdjdthlb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pumcwgkk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cobblogh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xslakpkz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fqirhxag.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gpgaxqhh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163eviuyilu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jnpgwvkn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ynojctpr.html

================================================================================
来源：http://www.aibaodan.cn/163cggtejny.html


<!-- 参考信息 -->