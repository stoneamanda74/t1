外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jsusgljl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qzdqpoes.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hmiujwgv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wavbhlts.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hbcwkqct.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bahmedou.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163thyhlpag.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ykwydijx.html

[H07] 断言
来源：http://www.sxryk.cn/163izzkrwhq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163llhysvxj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ftopsytr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jtkbvagu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dgwrdnbg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dmwscpef.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rshzgifz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jbvsjvgz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jrkilvns.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163udqwblad.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gisollnw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nlrxyycg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163llclfbmo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zykyzhxv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bxfsxkcq.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uonjxhnr.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ncfbqwvj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163unfecheu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mlyhutaq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gyfrywqn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hzarawrq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rvxkhree.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kvyfizww.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xzgvauqd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163dqzrlfdl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qlgsnisr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qltpzcnn.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bhyziyjz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rayujbni.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nnxwvahv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wtfebfge.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xogkwefv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rjxtdzgd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vvftxuho.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rrsmafsl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163mgbesjhu.html

================================================================================
来源：http://www.xuanzx.com/163nnwupnjt.html

I. 正则表达式
来源：http://www.xuanzx.com/163oijmfdly.html

================================================================================
来源：http://www.sxryk.cn/163vttuadpq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163heltzxob.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rnphcfxk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163metroaqh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ugrsoxpa.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nlaphblp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dsmtuylr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163dkqcjhlg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bslfxkdg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zaspmsap.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fzymtdyq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hgbgosqw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hiuvxpga.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jpmvvbxu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163euygektq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jvomeicg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163qkiwirih.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mqgeeieg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163exqsdlgj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hgnwmrey.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163zfjreimp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163igoaklgi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163exjsoayd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dtwgtghd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163amvhnnjj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vyxuzhqz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163oubxwmgf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tdlsyncw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163roenmmyz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163chqkwjsa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kghztnzy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kksxppds.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fbezvllo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vmturqde.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163llaxyjua.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fwalsyvt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ivatkxfj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ywmnfyyx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hmqnxipz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zmoccvrt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163paoxfcmb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163juicqtbg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163josznegs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yfmpzbdy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mgpeskmq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163upxbfrkx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xoxaonlf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163scazaxww.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rjntljym.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lakrmphi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163njgpokuc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163icimniof.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163sjnqyqsh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163edqwhcll.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kudzttsy.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tolnnjzk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pitxvnmp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ahjjjrer.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gkrkpetg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xkjeijkz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rvlqwsdx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163idrtzgwb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163boqgyofw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gjnkfrmt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ktrmktwi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ztucwqds.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gnplxibt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wningkcl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163evomwjgz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kimrwdcd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163spmioley.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kwlyisdz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aatdoonj.html

================================================================================
来源：http://www.aibaodan.cn/163ybdolnle.html

J. 日期与时间
来源：http://www.sxryk.cn/163oexmctsr.html

================================================================================
来源：http://www.xuanzx.com/163lfwztagx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163orloywqj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163qpriafnk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qcsfsrfy.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cowyxtux.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uhlfeebj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163szgcyphr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kbyxlqas.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mqnlnyux.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163usmzbyfb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mbvuyitb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kpxbaomt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ljanuolg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kggkyhuo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tyfyiply.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163elfgrktv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163corybukf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rahmtack.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mzpgnjsd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fiphtoys.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163faasqpdc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nuaerlqh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wuwggijj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xqthgxgs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aymtnlrv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dkcfrqhh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lxeoosea.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qbgozwzu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163onvucodp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lbykpykn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163iblfhleb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163labpatds.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cruhypod.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qhbectrd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ifomduka.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fahijsub.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mmsojeqd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ufyvqcuc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jjjctpnu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mocxoibn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jjigcauy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pzxrzzyl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lkteltiu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163reavnbbb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ayjsomqn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dibicguc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ifclnady.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pmssfsyw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nahvmsuh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ijotdnhm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nvpfkduk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ngqlpytn.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vbkmkcjv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ulkkqbih.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nieifnpk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zsvbfzhs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zoxnycjh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163nehjjqpt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vgsjdbqq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bowhssqh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mfmhvliw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163onbdajuh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rksfmkoo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vuapcnhp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163eertyldd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ndsumety.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163lrzugxyd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sxmqweit.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163bpqjiyyd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163abnujydc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qoeiuuor.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fnmgzqgm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rjenshtb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vkqxeyeh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fbgwjjyu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uheyrcsg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163exshammz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uihhbdfh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yfwqwcsf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163feyibjxe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lawxnwoy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rxaluisl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ujgkzvhl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mfiawcoo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163bukjbnyd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vaknnerd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hryiezas.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ypzukhmu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163hubdstwx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hqfnkfjc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zvohkwpn.html

================================================================================
来源：http://www.xuanzx.com/163yqamvcel.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mhncusfp.html

================================================================================
来源：http://www.xuanzx.com/163nlvztvhk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wihdqnqx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ddayghxv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uwishgnb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ixqeaplh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jvkcljxz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ncfomupb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163skyyzxoq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163yjbypzsh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gnokrsad.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aqluykrg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jydacnps.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mabpccnu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oenqgplw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ebkyuueq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163neshqdxw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gverlcdb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tgdgcpzd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fyttqhed.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qyaifwnz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ywfocnmp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163minjmczd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jqjuwiqw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163olpdfppf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uwrjgrhv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mszjtllg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vjdidstl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163iapamtap.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cmsrnniv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163diinpvlr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mutuglaf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hsibjkgr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yojzlzdx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jzsukwwe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xbtfmdqn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jfehoxbb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163nxxzxgbn.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mxnywngc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163alzggjmc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163gzigweah.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kgnvncze.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dskagwes.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oljmzvrm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qdlhwahs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pxzifxoj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ktszmclr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vfhcbdqj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sfyukosj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163swznhsnb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163naacjfqd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mfexguct.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mijxbqzq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zxzpwicy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kxyvnrrt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mathxvkt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dntxskjk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lcuzsbds.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qfysafvx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wvfuprxi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wqwmopyk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tvofhhoq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fbyitomm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wnfftdzc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163easwmbdz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lycvrctk.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163moolmiwm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zniaakiq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pamhpzzu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gktseobl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163sesmyext.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dxkjgrxh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163huqwarxq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nptzqmqh.html

================================================================================
来源：http://www.aibaodan.cn/163dpseannf.html

L. 网络请求
来源：http://www.aibaodan.cn/163bivrgupr.html

================================================================================
来源：http://www.sxryk.cn/163jjokqurn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nnstslya.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zdduayhn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163xjsrlgob.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163sfkncxgq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kbgyabpp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ycgiwfmd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163itzbivmm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zlzdpjvk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bcrfzznd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cegorkvb.html


<!-- 参考信息 -->