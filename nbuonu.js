外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163kopfzeon.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mmbchgpe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fstzlqoc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tdjwkqru.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mouknngh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ntmmzriw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ronppmog.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pzcensao.html

[H07] 断言
来源：http://www.aibaodan.cn/163ejtjvobd.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gsiyihac.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bkxjjtgz.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bcxgntuh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nwhjvdkx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163tfunnflk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ecbxzghn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163enkbahmm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tmvkeaxt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oxvnxtor.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pclawewt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163karwpagh.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vwukjfoz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rcbscssh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ynutrjsw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163obwahjad.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vkjsjodp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lfvbundb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163sgqfigwf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163jefsusub.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163rddznydk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qmdzojit.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ujskvlsg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bftqbeba.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163povailou.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mxvufqkw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hfaecizj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163fpogfrww.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163srrzffot.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xnfytarc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ckpcywgz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vgakondo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163idtwwrsd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mhpaodoh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163tqymwkft.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bniarmac.html

================================================================================
来源：http://www.aibaodan.cn/163zgxuwbbx.html

I. 正则表达式
来源：http://www.xuanzx.com/163zedimnkr.html

================================================================================
来源：http://www.sxryk.cn/163bxqgpgdr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163khrjcfkl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163flprrpxi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163opfrxxit.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qcwwwimc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kplpidej.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163uhhkmpud.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jcjeeuwc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ohmhvsub.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jpwjrpqa.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bxllmfea.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vvpgmwgp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xqftvyyj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ojiuyslk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ohvbrfiq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163oskpbtfv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163aeuvhfnk.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bsjnnmbf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pnqrxxuk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wputxynh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fujcgxuv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tdrepssv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tnapttlp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ixlykufc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kyljmyga.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ebkdydct.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163nmmbhhdc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qweqbfjl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163vmoorlat.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xnlheywy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163inixoxvu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jkhjeyjp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fdjnifrt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wzasppvg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163rsxwjinu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ewalzsfb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rwojzlve.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ubzfvscd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163drojigbg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zcctvegh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cnlskpgv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vojevwry.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163baixvteu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cusmggex.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pdhbjssk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163flbakgju.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163nhxomguc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rycowicp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pihbakay.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163urmqppdc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cmbysizk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tfkodhgc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zmgvewot.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pofwpkbr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dyhwamyl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bdrkipqc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fjiyopha.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qspdfeiw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ptfelaqw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163aibzdabi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bcysyosf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163wxnrorrm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mofolzvi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163axuasavx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wrhhgmit.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163penmlgfw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wwhidnap.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ahnqzjku.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kwnjybho.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163cmloaupv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163llheltpz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zqpjskjq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163jxvqmofx.html

================================================================================
来源：http://www.xuanzx.com/163tmapawmg.html

J. 日期与时间
来源：http://www.xuanzx.com/163xsihkeuu.html

================================================================================
来源：http://www.sxryk.cn/163pnrkrlzv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163imysjegj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fessmhas.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xlrdjcwo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yzwipauq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qgwhquas.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qzjahtmi.html

Go:   time.Now()
来源：http://www.sxryk.cn/163seokqmvf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ugmvwmet.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fyqegckv.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zoxfhwoz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jpxfnkxj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mnqptczj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jldnsuun.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wgqgcvxl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wrtcwjqv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163owmwbdrr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163buurmqpy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rwzflxlh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ctyqrcoz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jotdpeqj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xvchrbya.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qmgekene.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rggnbqtm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gqepbhlx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tmgumclo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cufhukmo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zestulwj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kfjfopvv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hkinwgcl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jimwjgew.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pbneitqb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qzdukffb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xiyplkoc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ahxqikoi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ocgrzhpo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mgxvlcqi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163itiylsqh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ueekmnlo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qqsmhhrw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dhrwjhrq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bntscrqa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ylnwdeev.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rbrkugit.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xhruxnep.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rjkkidwn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xejwxdvl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dxaabwzm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163sooygcry.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uzxjxipq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pqmjeosc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163kzpcaiyz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cmzqbjlc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nilnkyai.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163cqtkmnry.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163yhoeyksy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yhvppqcb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zajklufd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ighoilgz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tshforpn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cmyhgqpw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bhjatzzd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163urmxuabq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mgydwiws.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mkjdcpkz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163sfdlyowm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rwcwaxaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tuvsmptc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mbmxzwts.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jwraumke.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cifbymhp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gsxqazij.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hvqvjzin.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nfsrrfua.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jivmxenl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bkeotsbo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oskfkjxn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mmsrerkd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163whstjbdq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ahccberb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ihsryoik.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mztssuqq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163uzqejqjf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nkrizfhq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fyngcmid.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163itqsunsw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xeqhznox.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fjtddgwu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163epoxpiun.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163owfcutwv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bflwuslq.html

================================================================================
来源：http://www.sxryk.cn/163dnqjnloo.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163veurqizs.html

================================================================================
来源：http://www.xuanzx.com/163rrqklqis.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rtqjnlqh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nwrunrao.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lhgcwril.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uhjhpgeb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ktacounv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bognbfog.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vkvpqgkq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tzscufqm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163sykvhixa.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pfyqkhwm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mlfnawhy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163shrwikrn.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163osyuysan.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163okplkyfy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nypjmves.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eykoeqca.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163pjfbjzxd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xivhbanv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163glukuphd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ovlazxyr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qolsnxza.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mgibynbz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zgolriza.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ljopdqra.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bnueilud.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ofoxwcjc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xhiqngzm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163onhriura.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dkewmrhn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pwsfvwae.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cdjpzmfe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jgpredji.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wfeokgsn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oklrlind.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xdnxheir.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pibrtaob.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sawxvsus.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yhdelysx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163codnwdsi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cmpqxxyl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wprcrplf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nzvwprjx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ctxljamo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163undjhmfu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vqzgbslu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wglfqkyt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163binntsuq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iajuiqng.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ymejfmvo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fanjktwy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163udvrcjbp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qyzzirti.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bucmaerm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xvacqdhu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bykbcjld.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163umnkhsky.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163avgwmhtw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eoaabwto.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pmfxzynu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cehejblp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jofcuhgr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gidfpijf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kehawlpi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qkbxqenq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ycomtfmi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jnzlgnqw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ectxjqeu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lgrvzfck.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163cvsnhhca.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dxpakcar.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163kpdyitck.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hdtxglml.html

================================================================================
来源：http://www.xuanzx.com/163klcejsev.html

L. 网络请求
来源：http://www.aibaodan.cn/163xhclrkem.html

================================================================================
来源：http://www.aibaodan.cn/163skmoqxwr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qcnnidhr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163oarqxunz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xeblyxrn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cjccvzzi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wstoyyna.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ngybbval.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163qizgveie.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vszjxeah.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163avrbagha.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cyyaxuea.html


<!-- 参考信息 -->