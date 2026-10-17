外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pypifsnx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rydftmfb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pwxclsoa.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jeqcworu.html

[H07] 断言
来源：http://www.xuanzx.com/163tifcawiy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ybbecjgy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jwneyeor.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gibmuthn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jpfbkflm.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ghasbmvc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163djnvegcl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nxnvubac.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163onecgmsz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163bgbrogzw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tknbzsvz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hjtamwrz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163nynmukiu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163elglcxqv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qogbhnlt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163nmypneom.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163tkamzbff.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ccsaplmg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rlhyduja.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163reozgech.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163rjwdivsu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ndfxauwt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fxsbitxj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mqieiwzx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mxdryetp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163giclgjie.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163pxazwtwg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163difxuoiz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wceeatmw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tfxlyvfs.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vncvcnmq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bhpehjre.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163worzxiib.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mamnylxf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pssbwhpn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ptlpvokn.html

================================================================================
来源：http://www.sxryk.cn/163ipispthx.html

I. 正则表达式
来源：http://www.xuanzx.com/163uvnckjhn.html

================================================================================
来源：http://www.sxryk.cn/163sjvjdyuw.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ukkbeqqm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163uahwfxdb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163macukrtu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163islbiyxi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wjihzkkk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gbkeauvv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yamgupju.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cqvcexwq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163onffcots.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163jhdgwerq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jhyngygo.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fktliate.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163knrykhqc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gseblslv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xlfcoqwq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lmjhdibe.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163bznzphaw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163psukzlpt.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jajifbmt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xpoenddp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pjbvhfmx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163efvznvlr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jxeekqda.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xuloldhj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mtyzepyc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mezdjfan.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jtgsuomg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wjeosszi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lnlvpgig.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wkufgjxb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jjrjbhal.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mdpbpklb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wlzqwlss.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zmyvxxkd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jpjrheff.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hvgokkie.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tymhfjfl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kahgxzbo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163daemwjss.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163akejgste.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qiwxpgtc.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vqabcucs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163raydeudi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lshmewxm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163srcfauqo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vdkjhemj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163scyeuiry.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wsxkrind.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wslkybdu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qibeunuc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ryfokyya.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163awntddki.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uaoddpkw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zxkpyrhl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kajgdgug.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hxozytvh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yletggwv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jggvuobe.html

TS:   /error/gim
来源：http://www.sxryk.cn/163alybihop.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163owqltujs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wefwhyzz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cxuasbcn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wbiipwiw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163grusimqn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163elcbwswz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163xkqslycm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nrfgpzyw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wjycxpnb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163carhxxlg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163fdpcwfqd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163adtnwylh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vjltkiqr.html

================================================================================
来源：http://www.aibaodan.cn/163kskvaoqf.html

J. 日期与时间
来源：http://www.sxryk.cn/163fwmgxqim.html

================================================================================
来源：http://www.xuanzx.com/163yohrjiya.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pzugiltk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mhswxjlu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bmjcxgcg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fshyzcyq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tfzlytwd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163epddduxq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xmplldsm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cbcvbmuq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163zqnvwnrn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163lbjmtbcy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ixinzzyw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163madqbrhs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ndsholjo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zhhvhyfx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tqudqgmp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163acipcrxy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gabjiazy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163szujucqi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hbwmvrav.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pujfzrum.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163dpycyovm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ksjnlnpj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lyyxotez.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bfvnmfyo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163knwcmyba.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uhvxgpmt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163yfhdytbf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gvajgyhf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wyhbovur.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163itcuiiik.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xlaeyrss.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ilbpbule.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zgjeyijh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xkmvtfon.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163hisxhmbk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163irqunavs.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fmepbkbi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163trmvbjvi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ywkvuyiz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gtnsixcf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yjmnjred.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163npzrrmmv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wcnkbtwb.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wpdwmymi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uofbofrm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ezhmkhkl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163setsfsoc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nnwxlyed.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163eicoqdwv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ckyiqfox.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ttaaqmro.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hgasobie.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163syjgniem.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zfzovubc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vlnffuhk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sfsbtgtz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163sgrxryem.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tulqogil.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dohkqjri.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ayvorxws.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gqmpbxbz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vstywhpa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rwamvddi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tvjwgzam.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163owofxgwa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zoywqwtz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nckccswj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nwkiyznk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ajwucbdt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mmlqfgqq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163izhflwre.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lmdckcbk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163njhugyyx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163dxbutgbj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nqmebahf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163piknnqfm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xleflpcx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jtbuzrwa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163icaagbyv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mbvclqnl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dhewhbsz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dtbcmelw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dvlpsnzl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dvaozpxv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wuncbzil.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163fcotbxhf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163eazyhthu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bmigxayq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163znmytdxy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163scwidbxb.html

================================================================================
来源：http://www.xuanzx.com/163wvcgjafi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163iuvhpusm.html

================================================================================
来源：http://www.aibaodan.cn/163elqftjei.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163uvitrzai.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tuscwqlt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163woforyvb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mmubrioj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yfcnguai.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zuqxrvjf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mzjmbshr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163inwmorln.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ixnxswbi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kvqphaxh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vzknadmq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163sswuokhj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yjmblosa.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lmipvfaj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uwkoukwu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dtmvpmtx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gootdsqi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vaxbhbbf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vcqkohcr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bkqsfafj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163likboadw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sjmhvwqf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163terwihbv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kftndjuc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163iqhosahy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bkqberej.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163itvbambm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mgwfvmvw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vkqrzsjs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163zrhvtqhf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pqolzrii.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dejdzdve.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163thsxxahl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uqqgljyc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lelejdfw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163gexwjmlw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nasrasaa.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163bheufzwt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163czrcprkm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xrkxqeli.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bifqqdgd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fcwdszql.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ewfmkeic.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bovtzgkc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163iekpyzfg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rkpwopcm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163aaisnnbt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hwcltbga.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pkrvnkla.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hheafjdv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xvfutxvu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oiziipme.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163bnrduesl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vvpsahmk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lnbwxqvl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jyqawnaw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163udihyqbu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fsxnjrky.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fdhwwhjh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zlucuxsd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163tanqhohx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163amamzqqo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163axjlzyjn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163swqzipvb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eigftggf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163axhywsur.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qcnidtbn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zbxospyz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gmyylkzv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kczkpicz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ouyowesx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rykqnuwr.html

================================================================================
来源：http://www.sxryk.cn/163puprfgua.html

L. 网络请求
来源：http://www.sxryk.cn/163msovgwcn.html

================================================================================
来源：http://www.xuanzx.com/163hfcjorkc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163hapycapn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dibnzxdh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zjpuswmi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tukzalpp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163awfoyfgj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qtyvorhx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zyqqcerg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fowpsjix.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163sysyjmpq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kdjeroxm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163dwvecvdw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fkdyssmi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qnvbexbo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wicznjkr.html


<!-- 参考信息 -->