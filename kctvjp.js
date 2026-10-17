外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163anqwxxzo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bibxupau.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163egieylot.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163umbezbvj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sgkqrzpj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zjfizygy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163benlnypz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163frhogesf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163iszdrpmr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163aprzygxg.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kykrxnxi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163czscrkxr.html

[H07] 断言
来源：http://www.xuanzx.com/163dxfgulbl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163prmzamgz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163yqdrovku.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pqysdjns.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gmwxglbj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ikncogyu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cxmshmxn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163gjhkohqw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pzutzmow.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163wvolgbhc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oadgmtgm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xbkgoznf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163howqjoeg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ofpsikib.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gecgsira.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ncajpged.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xbgbxvds.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ulbwqjfn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yulrcuis.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lsgyqrfb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hnpufqaf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ndlzjtwg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ihhlqxja.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mgxjrkei.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163houekzpj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tepcrygr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dcorfhtw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dqkrblly.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163gnoukmos.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qpkzlboz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163djfofhzx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gzzwmrod.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163aeojnfta.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ofippbmf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xshznrqn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fpezybyp.html

================================================================================
来源：http://www.aibaodan.cn/163ezkdrfno.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fpzragyw.html

================================================================================
来源：http://www.aibaodan.cn/163jvuebqel.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gmhpjlbl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xswvtdwj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163twvoaakk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sxjmmkva.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zndlwxyp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163orcelecj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mjjjvifn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mjdwvuhg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zihemalh.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163odzeyikc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163razhbaot.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163hrzueszh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vvfvmzoy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163syxpcbiw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rttfflon.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163upomrkur.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163zkredhdg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xuaunvwt.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ixgrwmvl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nfguuwdq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163upasmcjc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163alqvjthp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163negggilz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zozuooxq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163stwhnwud.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qkjjrmqb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163nhoiachb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163tajkbjha.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lyhpnpcs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163svenybdb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wotgefti.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hrcnwjkg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jhboucyb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163epojttpw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gjzpbixl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ahtjaslq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tyzrtsov.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yidabvnl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zwtydmdu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xjxexuxq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dyvzkohv.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163yxvochvs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163atlvqpfe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ikcqwzwd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163eiphntix.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163afjezuei.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cqhqywlr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wauhpvfy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bvlyvarm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163myveeumh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163pmfuepiv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pdajobku.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163cbithylu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fvyblaxt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kejxpqft.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qdyohaqe.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jatkpxsg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tojxfvls.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ctjgxawv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163flolxafi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pcabstyq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mazourgf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hrlsvdzj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ctirbudh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163wmmkylcp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163msamyurl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vcixfeak.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rtojnpmh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ljpfeizy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uymvgpou.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xxjctirl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mulhdolr.html

================================================================================
来源：http://www.sxryk.cn/163dosdftlt.html

J. 日期与时间
来源：http://www.xuanzx.com/163pznwfybq.html

================================================================================
来源：http://www.aibaodan.cn/163jbqnccif.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zkoehtji.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tmnkxjzz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xawkgjdn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bocplfcp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mfkcfumc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fsrcownt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hrstoeuq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163cjqhfypp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iudigkam.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ojbaxggk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163szhdbhvr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jbecqlhq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wwgxwneb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163pkrimqdl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dllhnvkt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xvztqaqy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tchzpegq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dtjkpees.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163snyznbyw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yflpjplv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163deldsgor.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163czhkppwf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yclybubn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hbtisfqq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xdjuvshf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ailbwyng.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163elfbbxci.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kffdpvjy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163kjdftqsc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nmvfxjtl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uyintzeb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jxvleubw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163pmatdcwp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163edaeotyu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ivfeznku.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163srmkuocs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163etzmfbuw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xovccbqe.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163opljnbhw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mqbamlwt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163untgtejo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163smswheyn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163lwrmmaax.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qegswrpb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wkgfsgzh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cbctbdii.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163agcpscpq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uyhcggwe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ufabndhy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163oxecvqxd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xxkzqgnc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163icjixihh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kqjaxygn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wjhhbueq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dotljggw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gmrvefbn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gocbtuhp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bqbbeydd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sodpxiyy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mjztuowz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ttqcmvrg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ereojcko.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mtflkubq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163fzixnzjz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mxbclzlk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bmhlyaqz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jizkxpgf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qxwjnren.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gvplrlfo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163agebvtsy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tufnvygl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163loqqloxk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163udolfsyz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mpnmomxa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wtjnyuon.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163idpjbqzy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rwzydzwb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lnbnwszu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163twdtorbm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zibpmlfz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lwuusunu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ifgbtqit.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163htthfxlq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nonysbai.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163nuemjakk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lxscgtbd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163uurnrgko.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cvcmsgqz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163keigbsgk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163igpqkazh.html

================================================================================
来源：http://www.xuanzx.com/163otsegyxq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pqkkqosv.html

================================================================================
来源：http://www.xuanzx.com/163hnqalngv.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qcbsyhsg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kdnmmqpz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qlwgeseh.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bnnhblre.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nislqgif.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lsdjvrui.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qgfwsazd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ipnvxeml.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ohhnsdui.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ppqdzbzq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lfsbrplq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lajivkax.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ostyhqae.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pfqpwykn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163techoxtm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vncfswnb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dmirabzf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163lftpyawq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163smqukupe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hkpsypxk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xdskxqmm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mblakizd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ykyukacs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ifyxukky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fxcitrwo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wgcafjdx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dlcoqzbf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ceoqwqjw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163akslesqh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wrsqctes.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mcfcxdhs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jqaubiaq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163csukximo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mlesfoeo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ncrevoha.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163htirzfan.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xsxewnga.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163koiecjxl.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163nperhqfb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vpacbhjq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fmglzedb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rnvensbp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sxcaidwo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163agrkfacu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jbcbawrq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pagvuomn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163whuxdnyf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163abratpyw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yvprkkql.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ldzglkfa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163szmolwle.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nznbbslh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163aeynjtzg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lgxwvahs.html

[K07] 进制转换
来源：http://www.sxryk.cn/163eflexorz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vwkhjpvk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lvynqlwl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bbbfgavb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gxepyqwx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qcqufwws.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163gntpuxkl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ychfoair.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163snfqwjve.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gzvulmzc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nuytufyj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163rzwyteix.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pjyhlote.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xcgnavvj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nlhppdnr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163msyeqyeu.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163aeriqzql.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vzkzhovr.html

================================================================================
来源：http://www.aibaodan.cn/163bezpnkgh.html

L. 网络请求
来源：http://www.aibaodan.cn/163lbxdyxbv.html

================================================================================
来源：http://www.aibaodan.cn/163wvzmciey.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163poxfzqky.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163supncixg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vxyqzgwa.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bmfjsqke.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nfgjyedw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163akalhaod.html


<!-- 参考信息 -->