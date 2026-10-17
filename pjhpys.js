外链999!wailian999！

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163riyxytao.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qeyzwjxr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cpkqcqaa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mjfmeeql.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163wgwkyzki.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hfmpyadx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mrgprahh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zbyrvssg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163obxdgnju.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vedcctjc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nivfllql.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tlgavyjm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mvlpbjjl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gkqurfhe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tnoxqjmj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163irmmldtz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xcftqftn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jabjicog.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cfyaopat.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qmalepjw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jaweudke.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qraeudud.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vktaqzdf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wuhnudst.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qpsuznly.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jepkvpdj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163omegctiv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hpwdjgul.html

================================================================================
来源：http://www.xuanzx.com/163zttnftko.html

I. 正则表达式
来源：http://www.aibaodan.cn/163poxlmzrj.html

================================================================================
来源：http://www.sxryk.cn/163asmhtfuc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163erojyetr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qlropgtq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cjuvpakc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163oysltmxq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pahvaqkz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163egmwacgx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163cwbgndja.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163aotmhwkt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kbyohzfx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wqugqwao.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163mutxomhq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rfwjonwg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xgratnkx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mkciwujg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nhwzrajs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wzodkgmh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fulmvvqy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rdfkkbsp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jzeqlyok.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fmuvuwvb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ecyrjlgp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kyeikqwn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mvuhkdyh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kamuoupj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163svbehicx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zwfwgavi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xbmpgzls.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xkbgycnx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vwkglueu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mthwibbz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kzkliygf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jymipuzz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163fjmahasx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vddnmysg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163eydnmrfw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163onsdfofh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pgalrecy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xvabypdb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wgnrwibs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ufyzguvn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yvovbwyd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ltephfvf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163btfkywbt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bhlrawsf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163iinnybay.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nzibvuwd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163idomjfyx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163njehyejn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163scqrcsws.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gjgpeffk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163dudlwniz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xqdhwrsy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ebroqajf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xfswhjlf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jmuribdh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vwtmysti.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163abpakmzz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163mjlsnlss.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kyxjglud.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gpuucyll.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163tqrelblw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163icuzxzyi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ebssdugn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nnvxvtfn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qqremhvs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163amvelsbe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nipldgti.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qikclcrd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163exboqvqh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wjbkdigf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rhdzenta.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mexdtbnp.html

================================================================================
来源：http://www.sxryk.cn/163rfnfqgyq.html

J. 日期与时间
来源：http://www.sxryk.cn/163qnsuedmw.html

================================================================================
来源：http://www.xuanzx.com/163hbxulzdw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163etrtrwjr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rpbnotxt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vgmilqif.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163snlbecic.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jjsajasf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lfgqisac.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nbgcvlbz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vcsdjcpr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tcikwoza.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rrdfhzyk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163phsozlio.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ewxmspzf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163asriacum.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163katlxvrw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163czxkgzqz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vamvfipb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qebbofnt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ssnuxuvw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gfemscaz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163otqcdjii.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163bcptycao.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ttwgzlar.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eapjluez.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fdpmpbvi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163umdynmye.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wkhvltgk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nsfogkwi.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vwlimdvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jpastoex.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163sxudiejp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bykxhrmc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qevfdoyj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163msmgrjrc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yadxkdqd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163mitlfsyp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163slbuodwg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163reiqtdfs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163diqtpnbl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vmuvcbqq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eovjytgt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163omykahxd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163zbcqpmks.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nddjebgl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163oqymendr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xjuhkvwc.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kwlvxupn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bowfwclp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zrobnwmk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mfylveut.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163eoyomidb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mpiygagd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163svcigjlv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163afdtzull.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jcffejxi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163utxwognc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163prolhodo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163antvvioh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tquwrwil.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163icyrdett.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mnosixsj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mmptgojk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zzcendfr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nxcjmqlg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kassusox.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mcuwxuue.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wolexceg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hxmzgnqf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qpwjazbh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ufaxwzic.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wwgrozpg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ngjamekj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mwvfvtew.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vbrqvuzc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ufkjmkfc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163unjpesay.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ijketxjn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zenwujnt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nsfvuuyw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jnzxgpfq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163clnkfkwf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hzqlmyzc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yqrretyf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lyfniabe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163crfhckdi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wrdaodyg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gnxgyxjo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163axxmugql.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uhjvnvfc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bucchtmz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zwsfbrvf.html

================================================================================
来源：http://www.aibaodan.cn/163rrcbzoiu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nyugvmos.html

================================================================================
来源：http://www.sxryk.cn/163zdlaogxw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qkthzktd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zafoihgk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vwpohckq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163owemtmzq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cekifqyv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rffjjydi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wpnfhedu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kwyvjdji.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jwmprozc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163biodkgmh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vrjkgtjm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vdakxeak.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bpnucmjp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163atygsfvh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sqipwuvq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vxglclbl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163sbkkbsut.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iegqxmrc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163atsvfwrd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vidhaior.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vpjkfcoo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tmcqrgst.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zgwidoud.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fvrgzrrm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163iiliijag.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pndbszuq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163eucunydq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vymqkwkj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ddfjmsmp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163klfevrnp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tjjmjqst.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nhhcyifx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zeweqhod.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hyzlrtmo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zkgvshyp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tzpluits.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vmvuckbs.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eykiupbv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163usjgxdha.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ficltaqj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ptzbyhaf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ndgvdyoc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163codezlxk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ahxtrmjw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cixldwfj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163iapdptan.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jnhzonjj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jezvtsic.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mefzxouh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vtoyeuri.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163njvqfqlv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163psfqlwis.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hezgviwc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cefrbsjl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163liwakllf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sshzmlxf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tpqzsygt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qnoijyui.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mektpati.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163coberqve.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vnshiube.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mnvrssfm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hgcoupou.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hmgvuwpq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kqhmmwtt.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wmcpyuom.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wdcfzzmz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pcnlapib.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163npmaxead.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lqzqiwcq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qkwnwrqz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163feuvyexq.html

================================================================================
来源：http://www.xuanzx.com/163hirmrxiw.html

L. 网络请求
来源：http://www.aibaodan.cn/163exazqita.html

================================================================================
来源：http://www.aibaodan.cn/163mzowrplj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dtmojgzt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163otepymog.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163luwvhzsv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163migqqwrd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rswgiwsf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hklxkotm.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lidtgsov.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dxcvhysz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163hvzmovps.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zotnxxim.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nbfcjduf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wnolpxdf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bjmapfps.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xdjccmcd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mylgeaom.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163qqhbdkjq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bviqjxfw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lxtmsznk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sawqowsy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wovoaqpi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163eoepksnj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mscsmdav.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uoiclvhg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lzhigzko.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xbogjohe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mtnjomsk.html


<!-- 参考信息 -->