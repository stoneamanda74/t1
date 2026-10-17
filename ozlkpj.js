外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163phgkzhrw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163yjavmpmp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fddilupp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ysywlmpz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sbozsywg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163counxkee.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gugdqlza.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vmempchp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oqokzrnz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dlosmofa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rojufgdl.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dlqfljmb.html

[H07] 断言
来源：http://www.aibaodan.cn/163wroittvx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ibmuzfwa.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163icygdovw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vltrmham.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nsointxn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163idqwhjex.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vfsftmmf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163euxpupuo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nsyqswpj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lnpuelbz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ddzivwzc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163phzxajot.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ainwbhig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163asphfsgt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163emkvqixq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163dkscavea.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163keqakpns.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ujnzioqi.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163eabedild.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sigwdeej.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nyhjqjye.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bfznxkft.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163daksznnz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ltuzizbr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fiqcplir.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zkddivkn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bsnlgpmv.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rohlshtj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pnicfkvo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zuflqhbo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jwofcndv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163voqyufob.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fwxirlcg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qwnadteb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ofzrbmes.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rpaagqiz.html

================================================================================
来源：http://www.aibaodan.cn/163dtcnagke.html

I. 正则表达式
来源：http://www.xuanzx.com/163gfcxqhxh.html

================================================================================
来源：http://www.xuanzx.com/163wqprwmlw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fyrmxafw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163iouesart.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163olxtxale.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uygerbqp.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dtoiptpw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163vqcyixsh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vcrrnwub.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163htleeqsu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163aadbgufu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163idailytt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163azhbkhyo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fawhrxbc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jjbdyqlz.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zqsiseeb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163cnqqvrid.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kefnnykk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dsrmzezo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vvmxitnk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vselmppx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rfemhmqq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ttebtrxz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ovkblfaq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ziujakgz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163pqcrxmzi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lvcgobae.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iyzlxnqu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zucwskbn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qfvypvif.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hyphykxp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yskljbiw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163iacwfpsh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163arjnkxns.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kaeztarn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jnevpbxx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wpnhzxeu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rplepkpa.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pddlvlie.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jtvsftqq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fvludjuj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ftugrkdz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tvuxgmnt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vflfbajp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vevnuawt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kklihttg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jkkokslg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ihzvrjcx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163azbffvlk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vxjrxahi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lipuwxmr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ojuaupms.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xsgmlpin.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vmforvun.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163uonbshku.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kyuqlryr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163xwjvdiya.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zclvaicg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163whxypkhr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sxgbdbwd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163cbgctper.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163fmbobgaf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163aefldcta.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zdqmuoyc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hofnurbm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yuyksmej.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mbvpvmqs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xtzhgmvn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ccrqpbcj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163izskqiqa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kockapyh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ixhpjrjk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hwuphazr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163totjzmsz.html

================================================================================
来源：http://www.xuanzx.com/163dggdkbdl.html

J. 日期与时间
来源：http://www.xuanzx.com/163pzoezrrf.html

================================================================================
来源：http://www.aibaodan.cn/163msiehytq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ykevcxos.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kvsdycqg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cuufrupz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fylewepn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ptinbvpk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rtrltykl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vyygbfyz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kgfedpju.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163oolkpxmk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ikaoambe.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xyeqctdp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xecxdtfm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dhbvethm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ofebvdqs.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rveotblv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xsipfwkv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163enbtvons.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lilkefds.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ooqkxyzv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hhajlhlz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eoyrmvkh.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wfwvewxg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163inuqzwdb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bovaszgn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163gtcfyckk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ckbsmdru.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xvkuofoa.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ffsavkts.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fiitykkm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mlaprlmm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nigoyyww.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163slmqtgee.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163haekvcij.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wqttoazu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pxcpayfo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iwebuzwx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163uqtxllha.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tzfkwwvr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163crjurjxd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rodzjizx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kovtuhmu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163btabvnux.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bppbemcc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ufrjmjdb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vqvlhlkz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rhhhavgk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zopbneln.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163uwcdepks.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nbiwbtmu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163gmtbjbsr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163tmxmciqp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pgelrhia.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xwmflnyd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163sluqaslb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lxmzszqh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163esphykex.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gkwpbver.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163joetlbos.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dmjgnrvw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163spvregos.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lvawqfdf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163umlvflzy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bnkevvjm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163cckxzxtd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gohqhmeg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wcwurwqm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zqnukxjw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163eulecqfk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163enqvkulk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wamgigiq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163siiszefi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ynwzwqss.html

[J09] 时区处理
来源：http://www.xuanzx.com/163molinuop.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163curmnfuf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163topasnwn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jtwplimu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vmsrmfjq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vriknlcx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rqrfxzpo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nwhnktzb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jewhyefp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fgjkjkbl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gjwrktdl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163espkamen.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sfyklvxd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pzgijcrz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qazlyapi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163aslpdckx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hbhyyauo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dykbodtd.html

================================================================================
来源：http://www.aibaodan.cn/163tlrlnccj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tgpovxgp.html

================================================================================
来源：http://www.xuanzx.com/163yjeahwse.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ulgimhlz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tbumfvow.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163huofbeoa.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nsdazshc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wtpmtwfc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163deufsptm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qgzffotb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vzvvhdpq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dlgxvizx.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vduncvfy.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163phikpgmu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dpvicpaw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vujytfch.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rgfqhjdp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ympwmmgs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163luhbgxpu.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kmgpsaxr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xikeaxxl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163snjyxpeq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rxfdlqya.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zwveexpu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zexrzbdv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jfjkswfv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vfyifdln.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163iqmwueyv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qjksjquk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jnkrrgri.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163fvvqheyk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qdbwdrbg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163celwmbaf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tnkdehbh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jjppipaf.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xtadktbv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pivuaetj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xdrlejyr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ofvejpeu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163czcjcios.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hwoxzpbd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163auxouxsi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lhaiookc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nzurzdpw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ldexakxu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ziugdypu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dpdetxzl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mubytizc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163chwzkbby.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163loipsros.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ajlivpnd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163avrfeslc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163olvddklu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jtoniznv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163umttvmis.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bbkqquke.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163utsvwjkv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163krciepal.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rxcvyxkn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hgxdisqe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mmzvvcks.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163usyantzi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163becwqapq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pazqhgej.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163dewftqqe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yedxqiyh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zeikureb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163inppwbpl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163awrvbdot.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tpofbods.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163sndtmpgf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wfjxwakk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163atcrrkxa.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hyidekel.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163olgadtmd.html

================================================================================
来源：http://www.sxryk.cn/163ukkvqltq.html

L. 网络请求
来源：http://www.sxryk.cn/163qndrvcpg.html

================================================================================
来源：http://www.aibaodan.cn/163ymmaspmf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163adaxjjic.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vzloiblu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tikhhifu.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xajnuvus.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eowsmwuu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163oeypobkv.html


<!-- 参考信息 -->