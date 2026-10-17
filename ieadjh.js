外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gholxizt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ijydkpui.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163srugzahr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yysnxpls.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163berxvmbv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ywscdmmx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yrxehjjt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zbzzhgmy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163bgbmiswz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163eixbdssm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ghcdcofb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wwilvwjr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wtxoxxad.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163krwrcevh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163sdfhejtl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ewxajbry.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qlztaemb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163znrzbwmr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yjfhvlef.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163grjevcda.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nhtnsosw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fvirgdag.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qkblafan.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wztywpum.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163askkwodw.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wwfymiqw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jnpxleqf.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tgolkogo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163odavvanq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vlqzboap.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jrxgrgom.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bbmhdwib.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gtsvzasg.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163syiqkccz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qzlhdldy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zscvydup.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163duxuzenw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qikolnfv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fhfkyjcv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dtllhdmg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fjcyspjz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163whgbdngd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mvcpiqep.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zrzkgjuc.html

[H07] 断言
来源：http://www.aibaodan.cn/163iyldejer.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fxkycduc.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nnjhnfnq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xcwcuelr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ggtaotyq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fndxtpwr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qxaosjvi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163yjbodlnd.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163geoochpo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qytbohxk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lyqlgmaw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wegroqvu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hfewlmyb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dljxzmab.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vqwwqalh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gzuelvyc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163sccodqib.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zhkbyjnh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mrgrmess.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ldqemxwo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cigplgch.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xohbmlek.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sfavjpia.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ofuvbmmj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163iishhtgr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xtsshdat.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mqceyxor.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lbjdnokc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163miuybzog.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nikpkzao.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mgsanuna.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gwaesffy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zvbcrqxc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ztojisxc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ceaburjc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fcmnekup.html

================================================================================
来源：http://www.xuanzx.com/163lnbicstt.html

I. 正则表达式
来源：http://www.xuanzx.com/163ypchbgcm.html

================================================================================
来源：http://www.sxryk.cn/163tplncycg.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cfwwuwfc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rnvziqkj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163iexoxgsc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aorjkfjb.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ibkxpqba.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jkrlanqo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zcoriajz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kxuinijp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163tgovrbqm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ntvnoykw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163dcymmhup.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ngjivphe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mdjheleg.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pdmwxhms.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fafjftsz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163djyoewke.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163eljatysg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ryihpjsr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wffyzaqj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zccfqsvm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dqxidsso.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kllmiddg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tsmukozt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hjmcsamr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yurrajiz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163quguqyie.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wachbvfs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163deoflxsn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sqfouivn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bxcvgvoi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uxvpygnm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xibpldbe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jghwvnht.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jvkrdnwp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163dydcjfnz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ygrxwkew.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ujhauddg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163tnhromht.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rexdpazw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cwulyfqa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cuxltnej.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lrmmmwcu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wldhwhcy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pvgaumsm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lxyvviwo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vehvthcy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163abcewheb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zxhvhnej.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ontomkbd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163inhgmdlc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163inbxwhka.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qdhhdftm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163atnqjpqc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kjspuzfg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163todoplpe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qiksrgqv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jrjcgodt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163spmwowwm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kyhpilhl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yvbrgvlf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163neazvrzf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nqcktmua.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163djkuuggl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jihltfea.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zsfradua.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ggvfnxbj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lefzfozv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vvqxnoau.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qgzgwaaq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163jrlqstkg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163esytimzi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dzmsotaz.html

================================================================================
来源：http://www.aibaodan.cn/163wccyuvvz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vrvcrnjj.html

================================================================================
来源：http://www.aibaodan.cn/163vaahbruj.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163evxmdycy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ngkxzvhd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dxzrfeyr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cpssmtmp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ypixgpfu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xtwhmmvf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dqoiamnk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rkprpxmi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vgejjilv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163erniurll.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qotqkdna.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163raqknxfr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163cdlyveso.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vvbjgmfp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yiembaqm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163yhpculku.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rbodhrys.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163owlolzpa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kwgyeekf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zkpfzahz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qhaqwpka.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zagevjgm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163pdvikzal.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163avepbsmy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163tfudnscc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dqdppito.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163nelwllfv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163typbewhs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163tvteoske.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wxidkbej.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yzjqgshq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hlrrxmyj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zkpfnttw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rdxfrlha.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163whbtwnby.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gjkdnsah.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163soqaksks.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mrsatpsh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163iwghcixn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ottctgnz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163syyokmie.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hzmjflty.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rfcmcdrs.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163eqiupgyv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bamshdqy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qhwmyxxp.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mrthakst.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vajboffr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163sjgrlbty.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pmwmvwzt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163htccxixq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ugqirppl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ycsbzyxk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163flmfccdv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163mpslfrlj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163onzecrlw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163kgrcaorz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163csliylaw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163juqlhgld.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hehxhnxz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163klfkfdvv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dltaxusr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eaanjvpn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163bydcbqhb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tripuhuf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gvayizqb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nvzlhicl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163neixpxwa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zlxzepfj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163raplxuth.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wzahbplx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yshdidvs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ajtuzans.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ptspopgw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bcewdsra.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ypkribxh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ndjgfkhr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ddyyfxzr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bgwcaaeu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163aiopgebw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uouofinv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163knhanajr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163loghdofp.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mandwapc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ahtqxuhv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lmmejcoh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wzmkpmup.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xjcgrajx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kplxmoma.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fhtxntmm.html

================================================================================
来源：http://www.sxryk.cn/163wsxhbsuy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xuesssqw.html

================================================================================
来源：http://www.xuanzx.com/163azctwzwj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163laeqvovm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163megupaiy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163twsbvwvd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xaecbgjm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163euieigum.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163engbstfa.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nwjzgtkb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pvxjrnhe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pyfctxex.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qdkufpjt.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163obefmswk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163vopalmvb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gdebrylk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163djpzsmee.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jgqbrwcr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ajwejdpn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qfkqcfiz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163fiuxlgoh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ohtxklcg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ggadcxma.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmbqncak.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lmyxsgyo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163whydcpzj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fmprzxol.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zorrrjwd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ybcghpnr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ruemgptb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163edlijwpo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uxrukfmh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xadgdyaw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163drjrxozj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vzqmglkc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wstbcceb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cnweasjx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163grcbynza.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lldemexl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tfbavuwl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163emgbnmcc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ziqagvap.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eirwvcjg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yspdjrau.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163lakwqgjg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ecehjzxb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qfpbfqgo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bnnxaakx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tfvddgvp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qfoqlnqy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163autwedds.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163klfzjtwp.html


<!-- 参考信息 -->