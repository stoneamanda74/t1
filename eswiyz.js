外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163darxltlq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xqxqqqez.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qzmamxxs.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ymndaekc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kvcgoppy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163savggjhm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dbhtanfm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hzxgegqn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hnvxokwc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wmttyrat.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vzzyqmmn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163gwegcmgd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163epdcojhu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vuqnwtje.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hviebxty.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rngpobwc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163akecxmcj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rxxggfgx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163welcutsi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dbtqnkbx.html

[H07] 断言
来源：http://www.aibaodan.cn/163ixvbtnqg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163mzgheutj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zuohzcxr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uoiwxibl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lizmxhse.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zoqllulz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gcdyonvx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163othxzvus.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cqcnzccw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hpurvwbe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ptqophci.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qykfzeqp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mrruiszf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dmuxzuwk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dwkvlohn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163usqmztvn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ebwumnng.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hitigivc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gwlqnxsx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163iwvzyrds.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163szxffzrq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zidkwgco.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163otbxndnn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163optguavn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jifemakl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163eaqwkxtw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163hmefezhh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163yfajycjp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bysgtojg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yaiaeuxa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gvvhnicd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yfhgutko.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163vwtprmrd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rxkuvqxl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rnylnsax.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cynaqcep.html

================================================================================
来源：http://www.aibaodan.cn/163dvkbntat.html

I. 正则表达式
来源：http://www.sxryk.cn/163qrfbtxll.html

================================================================================
来源：http://www.sxryk.cn/163yvhotzkz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163beybzsdc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163avpcluoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163kwegowix.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kqbydubq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wmcvbfgb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cvmbesxz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163tchyoxud.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uajblvcd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mlloevjg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163muyvkzch.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bpeobfbb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mbiahokx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xmqlmanj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163meebzvig.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163sgzjwdpl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ujdkocnb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163bwgknzdt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dxetsoun.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tyrfyowq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lulyytij.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163afvecyka.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163liithlun.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163roeaquuk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fwtvzhaq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bbmexota.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qbrjblqb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163igndrwjv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qsnmpvvu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163iarylfqz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uhdlqxwv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tewpwopq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ivgtqfpu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163pvhcmlsa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kmhlajai.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sjdtpivh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163kceplajb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vseuzmeu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163bgajfwlo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163cuhyfuef.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163owqryucq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163djozsmro.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163slyyhwtz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mvittgsv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qdqhendz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163crydpkkc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mawxsadu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sqsguolm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163frylcned.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lqliqxus.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dniqpgkt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163psqybbxm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gocekgct.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ymvwhzuo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uldecrwq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uvtpycng.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ammrhruv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163utnobgqe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gobokdli.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vikpettg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mobyqzqc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ordudhjm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vigehxpz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163wechilrp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163weynryqd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xtxfsvjq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wpfzixvt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sbwccidw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vctyfldi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163xeksurwy.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qyfzkigr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ijodxrpa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163helihrzq.html

================================================================================
来源：http://www.xuanzx.com/163pbogpeok.html

J. 日期与时间
来源：http://www.xuanzx.com/163czvyqgjk.html

================================================================================
来源：http://www.xuanzx.com/163aqhiyfks.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wwmtczey.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ggacksix.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tzundmme.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wesvyjtg.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rntlqcwr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163aqbmjwhs.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bymoific.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fkrtumne.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ueeyrwok.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wgyirsch.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sdzvvrwv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ihurwhkn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163gzaaopad.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163cdfwkozw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mqzqlysb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163cedmxuhr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hcyimnsb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163uexioasr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jpygkuoy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gkpbkukt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gswklnxq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163udatkuik.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cjovhspz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163iigivbsr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163sjctrpqt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jzieudot.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pbeijhrq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lvsrzvhl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163keqeechc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qwuarrql.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163swpvydai.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zfgdksfk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bpkmlxcv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fowptawo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163arzvceae.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163eonwrygh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163peytxdpb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xikcgajy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wlrqvbgv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fbkuttok.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fpvcgseo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163amxgdzwd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ruyjmzlm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iminjicg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pearxlaj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hzlyzuwq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xzrgzrvn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pdlkqqvu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ntpbbkdk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rlbctaoy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lobbjvjg.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vkwlayan.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kgaepxjg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bxlwsozi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jfmbpjnf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dhtjmdnk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qmzwnzff.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xpibgyju.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163preulpou.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163cpxpvkqe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rzgelrop.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hniurtul.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mffeuvhc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xfgadmfc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163euugvggb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163waxhqkhr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vupmtujv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pyzqnokc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ulayeesl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dbktelcw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xqvraklj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xykdogjz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wuhqhkbc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ojhbpetl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wvavmjwe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uwmgsxne.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zkrpoqjd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163navjgfuj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yferscjc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163evnztkvv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fznqgvuh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163aiylqadj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uftkmtjp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163arjbzwpp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kgpeista.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eyxpxput.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zhmdsxsj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163aakeoypv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tknnxemm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fzncrprh.html

================================================================================
来源：http://www.aibaodan.cn/163snerctgr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163etgjedly.html

================================================================================
来源：http://www.aibaodan.cn/163ejtfxeaw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163matweaop.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rvjbnyds.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163juviuojc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163htsmlwnf.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jyvnfycm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cdsbythl.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cztcpsus.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rhcfjdwi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bavrvteb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163gqjjuink.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163abxxuzak.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163urzosiih.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ofbhtmcr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163porobcbj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sfqsckly.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163egwxghig.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ptcbuglp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kolltovy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rikjuhts.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ezwgmnbf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gnnjqlqq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qjutxwee.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163yonwdhqv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163suyvvjeo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163stkxgqki.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163eeevudxp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163lhddkflg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uetiefgb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ejeplidq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fphqlbyx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tbkpqjae.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qhbjtptb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tkhorusc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oiphmwzp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bfjtnhrt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163aexwxoja.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bcgasskj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163pjhoqicd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jhzfafqz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bzyjggwm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163najbwlzg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yaaurisv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163upmpzxam.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163uxecueeu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163yqytpmrh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yzurqgls.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163znnillhq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163whvasavi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163virwmisa.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pjinaius.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vmrjlmvh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163cllgqjan.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pajajslh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bzeacrqg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jviitwkx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ofzwscfz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163qnoemvsv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qkgjnpsn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qezaaakj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zwuavztb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cqicamrk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ydrwfyuv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pcoincgv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163szozjhhk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163bvkdplrr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vwbaovrx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ogpkoekh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wdaedvst.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163eucosdqp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163yqvqoefg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fwzqebav.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rydvbsyi.html

================================================================================
来源：http://www.xuanzx.com/163ketvjkzx.html


<!-- 参考信息 -->