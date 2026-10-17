外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ytabskrp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yqvkcpah.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ykriyhri.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163shyhpcfg.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qfdecuoj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163djiqxoro.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kjlhtupz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nyjjpctr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iangyvlg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163olquvlrn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kzlnraid.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vyclsjmh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163timnukyt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qrnljwio.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cryzhvcy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ypwjenzx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wbffgmhy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hhmvjjhx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kpzaoxvh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163erbpdiar.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163exnkzykt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163diwknutb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nzmpstzb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xjthipkc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ojukkrnt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163acjyhsdr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cfeahypt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lzgmwnjs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163vkwmwthh.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163izydzsrf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163nwlffjvj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163totcehwy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163swvpiqmj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fjtcluqu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fwbtkpdt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sipebypx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yrdqtkju.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gpvgxtlm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163igfkrdju.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rweypibd.html

[H07] 断言
来源：http://www.xuanzx.com/163nobzkomh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hibttshd.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jypdbzog.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zdgtcfkk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163elpjbcaq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ythjadsa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zfztzoit.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tkdlmezw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zncpkkfr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wcbzhsea.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tzvkqxcj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163aqoulgmv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dhmwbiqz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fqqipsww.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dpkdktpx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163jdltwbkv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zcscdunh.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163najdzgqa.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163itiiclbm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jjsbdjys.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163sqkagxzr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gsovgbip.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bhhltkki.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163fsesjlre.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163zaiczdiq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163qyvfcuuw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jllupmie.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qazjuquv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fumxreea.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qxnaapnz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hdrlnfcf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xckfcper.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rgzlpoof.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vudzvkpj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wewivgsv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163sdutprtr.html

================================================================================
来源：http://www.xuanzx.com/163qcmxuryz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163umvfehrx.html

================================================================================
来源：http://www.aibaodan.cn/163cljarcob.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163drqdbhbf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rzebgknz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163evaifovf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kfdprqgv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xdnfywat.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lithyydi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xrckkgxk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uzofzery.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163nhoasgiy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cpehwiwm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kgegrgny.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qooxmjub.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qrxsxfeu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yiguirdf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163uzzzidro.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163psgomvnp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qreopbni.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qmbqqges.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163klxkskcb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jbbrfyzy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dwusfeir.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163untckvtr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163spyqbgqn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jsxefuvz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gbxpqpsa.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rxdfptui.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xvvjuxeq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nujjlogv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163kqluxldv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jjnmmhdh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ymgdpwvk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wgehnrty.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wkfkjwqz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163oihqpfgo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yabpeiau.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vmzllpue.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cgrupbjn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cqeixpsf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163sfqovlfe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163epjxzpef.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vjoucblw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163nzkcjdbq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zrjsoiqa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rcpkjofk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ltenceib.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163shrsnrqx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ifhxlcah.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163muuafkfu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dpotqypa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163srbznvvs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ijjiesyf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gvrxqklr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nfuqaxle.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163axezuphq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xtufwbth.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nbjxkhuw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cnbqbuat.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hwpglvfi.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xfcutzgy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pfaccntz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ijfkxtff.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ejlpiftx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qnszbdvo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163avmkkeiw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qboekcrk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pfvscluk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163knmbqnxk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bfiihgzs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rltmztsr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163jofpdhok.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163agxgiyza.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fjulfwzj.html

================================================================================
来源：http://www.xuanzx.com/163vwbqmean.html

J. 日期与时间
来源：http://www.sxryk.cn/163iwwlwebt.html

================================================================================
来源：http://www.sxryk.cn/163jqxjkrts.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vamwcyzl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163sqsugvea.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ajdjvxyk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ixzmbymc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tfqlxndl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163uowirohk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163daficjtd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pioalmja.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sacyfbho.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hdpouvut.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mtkypohx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mkbpsetx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zvashijm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bvrlgdxo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uzzijinr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cjnalkba.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qiffdosz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rjbspckf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163csoavhcs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163aselwfsa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ypkyauxc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cfmwtfkv.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gxccmjig.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lixygsjf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163peurxgej.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163fkqonpnl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163aslgjhmr.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163enmklmpp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nwpjwprq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xtpjhaqp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bgxqthqn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163eofwtodd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yqjcvlsy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ezrfuvvb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gymyycvv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163chthrxec.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163utpgsvcd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gdvjfneo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rculpucl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nqotsaom.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vxbapalf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bjxwmoih.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ttuwwetu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vdnvuphj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tnejyynn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hqnjryfn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163tajfuhei.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gzsbrucb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gphgypmq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zgrrjwgt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pmrntwdo.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zxqyfhnl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pkedhomf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rywyckny.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163fwwwhuga.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fdylxata.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zrdujouv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163raeioqex.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dcndmxyz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163alqjyhiu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163oubwowxb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163whhckxwh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mlljnwrd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hikipenp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fpjuytub.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wjcjnzxr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mwfpbaoz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ojbxrryl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163viboymix.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hwhadzsw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fjlwtewu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hrxxuidb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163arujwkjr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163eoftgvkq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kzsucnzr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rdrlhgrh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xzuwcwiz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fgguqsml.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163btkquprj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qosetlta.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rdttutfe.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163bdxiwwlk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cgtqvmpy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qbpkmndv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bjajzwxp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163megiebtw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ktgfkmwk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163usbsxluq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ueepikva.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ugylebhq.html

================================================================================
来源：http://www.xuanzx.com/163qtbsxzjn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163avqrdzmn.html

================================================================================
来源：http://www.sxryk.cn/163fkropeho.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vidkyykq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163swdganlw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ktcpglxw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tvraareu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163habwkdsn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163fndyicwk.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sqkvfyrw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qxwmmyvp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vclaulom.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jptyyzik.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163atdoocxh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jfoermql.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mrpicytz.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gutoyrpx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yppdnxlj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bgsqnpxy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wnjcbhsc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163giqpzmsr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bwgwrgqg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ngtgkcjz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nhuziwjj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ywkkmqjv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dbdbvwyx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bhcfnyhc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eahqgwdk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gwqiyxmx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qewumhqz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163pvqddyoe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163eogwryvi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163pwqnlglb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163opjjltio.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yjsjnnob.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ubdfcxfy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bwjityzd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ijysrjmv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ubxinvnv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tcetjdiq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163gbyixunx.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kezavqiz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kgyvjnxb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163twwfbbna.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nuvhywwb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bbqdgxco.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pwwrdvfb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nhlavofk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163maentutr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ojxdbxti.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pgmxlrmf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yonascht.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qsklygdx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qoptpwoi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cunvduea.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163pdiieegr.html


<!-- 参考信息 -->