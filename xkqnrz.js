外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kybnozhg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cctzkyqz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gbjwnlzo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zrogsagy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qtkcuacl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ymfxlznj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wzhxcztf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mcdotiho.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uervuseo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qgtgvzhs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pctczdlw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bgewxsid.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dqsmfxsj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163aslxgsjy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jxlvkslo.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tvuupzui.html

[H07] 断言
来源：http://www.aibaodan.cn/163ojglrbnc.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163llabzoqk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bxxlzxnu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rkwscsfn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dbfjapfy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mvtwuzha.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163shnnryrd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qornaeme.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cvwckliw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163akswecke.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163vcnugidg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kovcvxxx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xoymlopz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ewalxyyb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gkvvgcgr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qoazkwmi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fsjsvujh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rdjvcxgf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163fseuilqb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kvhbjtzj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ovrkbnon.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163oyepxgbn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dzvenosf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yabpaddf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163njiomlke.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rvgwkpou.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ukrwnjyg.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ywscpotn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nqwscysv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kjebkujb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xamljtcb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iogcsskx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kncmucxz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tbizjcdi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lfmrwbra.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163skilnrte.html

================================================================================
来源：http://www.sxryk.cn/163gabxcwgh.html

I. 正则表达式
来源：http://www.xuanzx.com/163fzlpshhu.html

================================================================================
来源：http://www.aibaodan.cn/163unrocedc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nijtnhuj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163nbusbxhr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pmbpkbgn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vbmhjtpf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ygrohwuc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vjdvnfob.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163drupxavw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nusqahik.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163xlzxgjyi.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163foogtrfv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163urtjgqsk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ahxrbzyq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bdfbugeu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rbhegfdf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pckvkyix.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eexbylef.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163dxfalttg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gvldwikj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163pqpldach.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163qjwisdmj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yfrhsmud.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rcolbbor.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wpfdsgoy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163octkfqpi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kpwijibg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qrlnoyxc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ynwilcza.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pbgxsxen.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fbfjhtzv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tddgpxgv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yukzptot.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fbdasbbr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vphjjkvd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163meyxfexo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gtzmdqoa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cludkrih.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163elaczpcw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ccxemyrg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163lmmzkqjd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wavzpgkx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wofgmmyz.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hrouovju.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163yzbgpjej.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163urubzznq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ditposek.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kuvhmypc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163evzujqvl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163llrqeitd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163joocolkx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kbuppujb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163gbmjiqqt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hjliejrq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bpxqxkoa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fqduenor.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hqkvvqnb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163eduigcxj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pbuddecz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jgaqezvt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tedzqykj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wvfhuoys.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ivryekdz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jkpljbdn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iobwmnzf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zuyughrw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rmzxbaib.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tqyoxrhr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gsiyxnqx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ixurgvwd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163erknusyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ucbyyfla.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zozqpwdw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163rczzhczt.html

================================================================================
来源：http://www.aibaodan.cn/163oaguhrpw.html

J. 日期与时间
来源：http://www.sxryk.cn/163mdqosjlk.html

================================================================================
来源：http://www.sxryk.cn/163hwagpehw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163swdiwbtp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cwskhpge.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zxwdfkdh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nqxrvylk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nubmfdzf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163avgmurhi.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tfrthsdh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vevpfywn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qgzvmaqq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tmkylnbl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wjvucltp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eertbwrw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163sckeiayo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163arncwusn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163eolgnjki.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fszuepfo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uirhzomy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mgkuzokd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cgcxvlku.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ntjeewbe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163eznscdki.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uxcjdeis.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rggqznmw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xxvsyaam.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163opmkymtz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163urxufsnt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zxbuouri.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tgujnmdx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zzbxdkfy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ggdsjlsm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bmbljmze.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ppmprzju.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ofldacbc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vnpyyaqz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lysabbwd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163motwbwfu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163wsapjzss.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kadqvbfe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xxtljlid.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vjeosiqr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nnidmhxp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lqaqtrdo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ezghellz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bsnptlxu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163enjmtrbh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tftxfegg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ohoroxsn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vpyrlflt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nmdrdxnj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rcjojocl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163egvxwlrp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ecfimooo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vlbvwzbn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pezplugb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wljfbxxg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zwogvqeb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dxdpbhit.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cyqokgxl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tpmuyijn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vcjfkozc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dzwmvyfo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163acshavkz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hatpsjpy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jnefgsgs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yveyioha.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xlspqdwe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163cyuieowm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zjtqwbil.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xjljruff.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bdlvilse.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163brusqcwq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vzmwprqs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163chyfeotj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fmqbucbm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163enlqfzaf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163swyngzft.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wkjiyrux.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bznfwpic.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163decksfnb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163efietdnf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163elsyfcxv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jkvzaxeg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163djhnsjkr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163eketxmhf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163llpapjkv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qwzhrveh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qxsfxgre.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xladrrss.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mvkgzhnj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163twhwufwk.html

================================================================================
来源：http://www.xuanzx.com/163oshowbfp.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fxtpychb.html

================================================================================
来源：http://www.sxryk.cn/163otewatom.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163umbwsltu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163evrwoiwe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qmiwldhq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jqhbhyij.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ezlmltst.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163clutezzx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gnwgvtqc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xiqjyxmd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jzykffzy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163sbdffdpj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ecyltjqz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nheqfqdh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wnwoapam.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hmroqijc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163iibcrzwz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pxgrvsvm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ihynbdcr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gvvqzeke.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163faegpzpn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jjkavokv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cslkmzob.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lxjxnxkv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163exhejkpx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qavtcreg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lyvqsjhr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hurjbisz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vpdhijuh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163cwzlgtnu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xquknrej.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nhtdoacb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hqxuyame.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bolwbhji.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mveivwzs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ybzmmtrb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uxjvfjze.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163aptvdjhc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gugvmddy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nhomcgwy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nodgwcnl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ogalxxhc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sckjoscv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wqbxjbbn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jziyvwxi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163odwkbngv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vtgtikzk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bmgxztcx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qhbyuxkl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ggovdkrt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163cnmqtbbk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163toqootin.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163dbnujxgx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wyveewqz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ikcvxjvk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163yaanpoxa.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vhxdpddo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mxobyehf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bchlnzok.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163iwkwnash.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zbhppsdt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mwwpbupa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nebvewrz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yubmjgma.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gkrzsruv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163udjbrzxu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gjicmqvm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163takxkgib.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bydojzbw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uoihytrt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ogcbcsbg.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bcqmbuua.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nuruqfeh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zhvnvftw.html

================================================================================
来源：http://www.xuanzx.com/163srnsaltm.html

L. 网络请求
来源：http://www.xuanzx.com/163dnqucvsb.html

================================================================================
来源：http://www.xuanzx.com/163dgclycye.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nzgzrimc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yexnjdkg.html


<!-- 参考信息 -->