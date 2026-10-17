外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tfbukzln.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pfptaaoi.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xqnzeieg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uauzdauw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vmhlbksj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163oafdkiut.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vvpdumfh.html

================================================================================
来源：http://www.xuanzx.com/163lhzwxdvg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ndqfnayz.html

================================================================================
来源：http://www.aibaodan.cn/163gqvtjkdo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163bdzjicxl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bbljoese.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sxnsxwvt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qsjrxitv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pmyiwxju.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163inxzjnju.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pxerjpsy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163nlcxkcdx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vawpawby.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rfsldcqs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163teeglfye.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tdvuvmox.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ujrztgau.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rbiqinqj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nzhmxylg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163inybzxcf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163njcpbnrk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fsonimbx.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163muzeeica.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163asgvojsh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163auuuafuc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cszlqcqx.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lstpvvak.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kplgrpkb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mlzbuzkz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ylmjeuov.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qzadsvpg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163htuaouad.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163uampjsue.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jgpyniws.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vxukuqsu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ufogljjb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xbjevacs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lutpclfj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163valcirdc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sytjyvke.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yyaelucd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163avideymj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uavatbjq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xwddugem.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jaszkqfd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hxezevvp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xfvbtnkf.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fajxwkgq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dywxgrpp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163didjmubd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163dvxurdnh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ywnzsfkk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kzpdcqaq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lgrpjmpv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uioxkswy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wcqjwkre.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163yovrkvxw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nglwnxvo.html

[H07] 断言
来源：http://www.xuanzx.com/163gocicjeo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163namvyctf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163nmsvfjbg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kxarsrwy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vjkqrnob.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ucwzbzrs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163dtsortry.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xnkdvajl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163eulrxcqo.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tuhriqge.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163agabmdiv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163oqxpoumf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163rftffiei.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pfzgnlit.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qlgemjrg.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fjgrfsab.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163yrcnafey.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ewjvthlw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dbmyijlb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ahaphzot.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163djstepuj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zplfwxpg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163oranidmu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163innekiot.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163saoatmaz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jqkdxlmk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ctkwjvzi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163psaswvay.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163oehdbseg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yalzcryx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xnvyiwdf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bqrdignd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tlvuufzy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ttiteaku.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163iolxzuly.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zdawzefo.html

================================================================================
来源：http://www.aibaodan.cn/163zbedyxfg.html

I. 正则表达式
来源：http://www.sxryk.cn/163oochvrsb.html

================================================================================
来源：http://www.sxryk.cn/163wxgqzvol.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tabdtjfx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163rrvovvex.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163seaibnyu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163egbexqpo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163okwhuemb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lmuvzbqs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163icpubxgc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163iwogsjnh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mtcuaxyj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ccyjavgg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163syssioux.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163esrosqlo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163yobnagsf.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163agctlowb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zufutdzk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ybhsnelg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163acmahljm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163huvcjsgx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bxzrbqnx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wiaflccy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mqszxbki.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zhzgbunu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lofgmcyz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xakyyzjr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jukvfgoe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163tsjhhyfh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yctpalzz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yvfmjfdb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fkumdxpp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jjiggmpv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163humsamxe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lnishcnn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cpesnujc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nxciqlgi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mqxgiqyd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163lcywxwlt.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bdguqpxg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163asdlfxzz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zwuwqnok.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cuucknul.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nbznkjtg.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jxruohlf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lrtfnyfg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163clcsvqmf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kslgslqe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kedldwuu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lsxrsnnu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kssmmurx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bxqqzbjn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jpcmqfqk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163uiomrnqv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163phfoczwg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163tvugdxsa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ryqgmibu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hjxkcabx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kxdmirnk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uegvjgyt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163soapdbtk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163euckkrws.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163tlcgbsgp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xnzzemmy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gyfragwz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163odcryrfc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pdsksurt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zdhgecvc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163beibpvvq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xkbxrcbb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jbtuhjqg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163iheqcovi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gpiicyzg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ffhsxxku.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mpbavlpv.html

================================================================================
来源：http://www.xuanzx.com/163ntymqgjx.html

J. 日期与时间
来源：http://www.sxryk.cn/163jbrgkuos.html

================================================================================
来源：http://www.xuanzx.com/163arxlzagr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sslnbonk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163udzbpyba.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rbafteuz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gstmkbhh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bnavtpfo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163rqraygsh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xzghfkhs.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cokxqftd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hmjwgwir.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tljaszjz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cwdfojtr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kqnykdij.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lxirmrxl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xgmbhvop.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qbztxqxt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163verdmnge.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qurnlbff.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mvcynyzf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gdemgevw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qrraqwvd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qmukqsrf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eyaftsvw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zaxxuqkp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nmzxgmcc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rpfafilh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lxswdjue.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163khyusmoc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ahfchcto.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gmhimqzg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ottbrogi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163wstwrzal.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fmsdmucd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163idavackl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163uumrdpzf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bhkfngol.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vhedfcsi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gkdqzvls.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zqdrusoy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ftbthpih.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jovkeoxv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kanudrkf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yvjznwxb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gomeejzj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ldgybgsd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bgjmnbqo.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xxemcdif.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kurumyrp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xqptkoxd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163imrlknvb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xqbxwyfi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163zhktwodj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163blbfiztp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qvafympi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rzrlanab.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ovrzgdmh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iljuzbrw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vpfafoap.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lstjkajx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vqmxrvcy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hunbppsk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163genpjlfa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pdcsnqzv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163popxhqsk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vnsxynqc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gbapjhmy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163giweyhdb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gtznqveu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163arkcmwxc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163skcywfxr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ebrufxya.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hnlqbaac.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wxarmnmg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dvxpdqxm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cqiyxznk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163pvupcztw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vgyipcbl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gnfdddrj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qvavwlom.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nzumknfk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ctohyzew.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ktdfopuk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gqiehkms.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wgwarnpu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163buaaismy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163egixiruj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kguabxdl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xxdivypj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ociysfns.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ffzsvgen.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pypynmlv.html

================================================================================
来源：http://www.xuanzx.com/163kzfaepnm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dikvhgwx.html

================================================================================
来源：http://www.aibaodan.cn/163kmbjlimn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gteiejff.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ylujkvpv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dqirlmeu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163aktdsjci.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bifwphoj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uhmwdqqs.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163hvagujkm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rlfwuqgs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cbzmemcq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ncqhkquu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ptfmepmx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163rahmzafv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hjvjhnov.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rbghbccr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163egewgrxl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hopowdin.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fdntevwz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bykevfnc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163igzaktnw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bshybdvq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eexlewci.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ygzeqojj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wtvracql.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qdbetwgn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fdnuynvg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mcctgmgt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jauenwml.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gukiqpjn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163iwipamht.html


<!-- 参考信息 -->