外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qalrzzqy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fsyybzfz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ruyyfpgo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jarvhell.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rqnuanyk.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ihpouekq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yuhjdhxl.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yptrybyl.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qlkzldfe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pasipsxt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ghjhevuj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cpyovbmn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163omaruofl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163uplyjrpp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zeythzxc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zotkwtfs.html

[H07] 断言
来源：http://www.sxryk.cn/163kvtruefv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163qaxmnmpq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jzavcjvj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wejketxm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163htozsgzt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bnbqsupi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163bojnnkfl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163onjjjwra.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ibzeoxxs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qdfaqzil.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qcemfayh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fvytwask.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fqlytwgl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dxakfvow.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xcqadsoo.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kjlfrxly.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163iecqnxkp.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kttfqzbt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gajzinqd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dbxdnwlp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kdvhmjjo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ipxxtgek.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fehiszpi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pleywseh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qgzwjfnl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lanmvnyo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wedoxtwl.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163cwskjfne.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jzgsleop.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mbuzmulk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ealxgqas.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163beadsifi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bvymrvyb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163yopbrsns.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163zutwovfr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163gxdtwfrv.html

================================================================================
来源：http://www.sxryk.cn/163mnlmkruv.html

I. 正则表达式
来源：http://www.sxryk.cn/163lcdwjywl.html

================================================================================
来源：http://www.xuanzx.com/163dgffjvwh.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163arzjpxcc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hjpobfzu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163abtoubuw.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rnaotkdk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nvcfresg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163orkzwwys.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163weffhwbk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163yczxrsuc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fyhboccr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163dskuhnsy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163uxpzautu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ztarpeji.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163nupkdfxa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163spwvughv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163eyflmyhu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nfcqivwg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ulpiklzw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zuimktij.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uxmxnavq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163tnilynir.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gwjzpkkx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bwkqokwg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gnxzyeto.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jhdgsyav.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bkleyqif.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ansreuai.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uiywnuka.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fgjrrkjw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mbjqnuku.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163afjvbwpu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ceknlnbh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cillwrex.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tqmyyhqy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163eflffxeo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tkvzmmen.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nzlmckfx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ttabrodf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163icmyqbnu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wcazcije.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zjaasvnt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cgltdvqj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yypudxqd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lgnwbwrx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163stqhpghy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cybzqzxf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163akgeyavk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pdffsair.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wbznoqaj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ozpxvtrf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kcmstpht.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hwjtezwn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ngdrmepb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163yonknhzn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mypcwmfi.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163zlpmbllg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ggrbbaoc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cqnhyari.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cxehlpwd.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ifhfqebb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xvcutayt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163otjjptre.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163bvijzemd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163rlzsdnph.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163iniikxxx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dulxfusf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163snuzlmsa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ndxpjmah.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hvwftpha.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ksfpmdoa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mdihpede.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163acictkww.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vycztcxy.html

================================================================================
来源：http://www.sxryk.cn/163scmmcuiv.html

J. 日期与时间
来源：http://www.xuanzx.com/163hmtucref.html

================================================================================
来源：http://www.xuanzx.com/163heiftdju.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163oivvexla.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cbauguvj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jxsvnpqf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cffmazsx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163owrufbuu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163uvwehevj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mtdwfoly.html

Ruby: Time.now
来源：http://www.sxryk.cn/163axllocsi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rqsqmjco.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163oovngeis.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163atjgquqr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gtkdrlhi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pyalyloc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pqdcgbuk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ibupmsfu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163etutcrzm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lygnggpv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163lbkfbkwf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nkpsxpyw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163sexruhfe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163fymikcnz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tlzqxmol.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cfbzzuqi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gygnqfkz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163oducmbui.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vnfqyjvc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163nfgajiir.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xmcgjpiz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ffsfuapw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fyvcbdan.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ozprtmzf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163oztpcmhe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ckerwnft.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163fckljdan.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cxaktrwb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163iqyenqqm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rovvxqiv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163busqrbzh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163amgvrxze.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163erdbdnle.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bnfjdfge.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jijzvfap.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163redxcgrm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xqfhcqfc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ufsoeeng.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kxqiswbf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163faaejhsr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kanpcsyo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wbmpjgiz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ufeawxal.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163bsxwflhy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pzpikohk.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163roconbng.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nyqkldad.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cwjyisrm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163noxayemh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163luuejkec.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vhwoqrkx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wcxxojux.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vwebllmh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163iibdbtbu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mvvbbhvp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gacvppbm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sbimkxsq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rhaphktr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163veunjtfv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163evxhigya.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gsrdnzan.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163soectojw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vpithoqt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ryibqzoo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wmblkszw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163uqsjzdjh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163efydvsnd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163weniymgr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xtjqvudz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yuvmfxdv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163oeeapxom.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163esqhpefg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zdskesvj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ctxsakcc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xcgwljij.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ikchbced.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tmhwfjwc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qbpxdqeb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kurkqvoj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ceooyiix.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rxpvaetv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ghnihqjx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zujrttps.html

================================================================================
来源：http://www.sxryk.cn/163irwziigd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cqeohvyu.html

================================================================================
来源：http://www.xuanzx.com/163vdgtmsan.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ywffcity.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tstndjrl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tfrvkspn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pjejrfaj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vflfxjtp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dzcmnjpk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yrseskjn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163floudwfl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ymbnpuwz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163apgvufjf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jctbmpmg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ivxmsres.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aqdeolxb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bnhwyzwo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163yfrcnvet.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163blssrwdj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mylhhgey.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yjsohlzj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163djusspnr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rglbvmsx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kefpgxnu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nhkgrope.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lyfwtybz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163opbzxtbm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163afhzwsjd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wlavfrih.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hxivwnvt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ebihmuiv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gkscyidi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lqexdtwj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lgsajxat.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wnbltxrs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163sajjpptf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yviurxlm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jyifdnqm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163uucixfqd.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163flzeqaol.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gxlujkdw.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jgqpiiaa.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hvmszqqu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nynqlykj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cymmqfyv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kdpkdkqb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yxnsgxyy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ohhomhuf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xsmsiypq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dgsenvai.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xyetromq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ujffmknq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ugfnkiwz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163txikrchv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zemeszqr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cradavwa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fqaegsnd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tjtrwedm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tscnjqvy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163rvzrathy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qvtqidrt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eraignep.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kijnwjcg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dpplujzk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rejogcft.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dfmineyk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vttangiy.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163egsmndpf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xrbxzvyb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xmbvhnax.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qttuxuzh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jthcqjjh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163txxxgwch.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rvanwlwn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hosnemap.html

================================================================================
来源：http://www.sxryk.cn/163fmjopljs.html

L. 网络请求
来源：http://www.xuanzx.com/163vrjydywq.html

================================================================================
来源：http://www.aibaodan.cn/163fhmkbdwb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hbhyczlk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163tawwviux.html


<!-- 参考信息 -->