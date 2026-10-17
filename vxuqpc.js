外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zbuhecen.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oyvhdyln.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pgdklobx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163asixkajy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163laepcqxs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ivrthffr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hptpaghs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tlmggcdk.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163bncrbcbb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gifjzozf.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lyonbrti.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xnasldss.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ssrwerdx.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pvzkxlqp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jgyeqabr.html

================================================================================
来源：http://www.aibaodan.cn/163mtdzvwid.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wfclrbxm.html

================================================================================
来源：http://www.xuanzx.com/163hkdzputi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163aoctzylr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wzcmxuly.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dvwldjyj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iqewellc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163sclezgie.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aimpxmev.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wibyojeu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lxjgtdpp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ywovyipj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fhfqpuca.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pvelxnzd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rmwjsume.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163baufpnzr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gzroptfr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xuhynhlu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163yygqtqmo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ugfahgtk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lpxbdddn.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kvyrarwf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163swicrhqr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163whcodyia.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163utheyode.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vhcbllpi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vdqseoob.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ctymhrdx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163tyrsncfo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ftbvtstc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uftgaoxj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yycdrfge.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mqpoazbx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163felcalbl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vachipbv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rbuhxygc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163snlpbiwa.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lekfmqej.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163yfqylcth.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rkhcdngq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ifoacsas.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163yervbuzq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163okktoeua.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ftrdzgpv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vcdoenel.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163obbnfkpl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ehhftlid.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163udkftlrj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163evimlusp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xmnydmdb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nkzepmkb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tkqhhimo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aajkrjpv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163jpnpudra.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163igqpupqu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nnqonygz.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fakllxat.html

[H07] 断言
来源：http://www.xuanzx.com/163rnthfvmb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lhrokkaz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ttxtmsob.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163uhqrpqdp.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163uholpkgs.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jkmoydog.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163nmuqvwkq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163glpijwjo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ujnddmry.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tjzmrvus.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wzkwrzzp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wmbmhvwd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163bmxzrmkr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mzclpydf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lpfzznpv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lmeiijgn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ashaamud.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ovijtdzg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163shiratqk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zcqysyil.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fgcfygvj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wvtlnglu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163pblxacwz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zvjqzfhj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ryjfhldl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zgknczio.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bfxfzrkj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163swxmfqvt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dpigzaxl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gygiioga.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aipqguko.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ppxtkcde.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163tbumduzm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wkrwarfm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163wrjsvdlv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bfmsdxzc.html

================================================================================
来源：http://www.aibaodan.cn/163xewxsvlk.html

I. 正则表达式
来源：http://www.xuanzx.com/163sjaxtsis.html

================================================================================
来源：http://www.sxryk.cn/163czxeysgm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kqttkfts.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kjiehgfs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ddgmppqg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wdxulgwx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163iuglmjts.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ocblnihs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163llibtvnx.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bksevaoe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jiegwfrt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163twjchmim.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wiyexqtv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mldsneqt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163wpyutfuf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nhfwmzdv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163axbicnvj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xukccvmj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163urbygwbv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kltoxymw.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163uqwdhfmk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dtwnmlxz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163oifggxyi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jgcvivtx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163wtzqkfyz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163bkndsbdq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vtrqaevr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jxctqtbq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163izwfyyor.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rofirbfe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163axnyrtwr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lbycjfhl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xvrgtakn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hjazobfv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vhnwyetw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163msnepwcw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xdkrxnnk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163iprrufdz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zmqoytsv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163obtocvtw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tiufpxpj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fvjpblmg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lhzpsqjc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xlrdqfdq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mtukzivy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ytayqpxg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fhtuvejm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ndwqgbva.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mvukwqbj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163jjsnanhm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ubwkfvhl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fcqbznie.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163enetzlwa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163aggrixmc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163muvjtwck.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hzuulpaq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pjlqbvhi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hfkpqutk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rytibbdf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jagapwwa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vstjvwub.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163eqveqlcn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jubsmqfz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gxinryhr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nlxphzki.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mprpjune.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qbkgbztk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hpubhiro.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pfimyfvi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wctvyzzb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163mzaefpjv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dlpezqjl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gsichnpj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163upkhmsrc.html

================================================================================
来源：http://www.xuanzx.com/163iomijdfc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163decsvbmp.html

================================================================================
来源：http://www.aibaodan.cn/163ocyuubhg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ibuycflc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163prqftrtn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gzhhcppy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gngmioay.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163paodrkkk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fpxweccz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wslwlahx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hohyurrx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tmdbfupr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fvkxuhsi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163uuprjjgb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lqyfapoi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xfitxbbj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rnqhsben.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163afevpqam.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gmumqaed.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lzzllemw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dbponbyj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163thabdgne.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ehzkphnf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163acycjadz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163quilhdcc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jjgsmzvk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wrnquvck.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uuhjgoxs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zzauaswp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163akjsffil.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163svhokgmt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dkyrzbjz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163prrwnetq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163uqmrygbp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ztxvcuom.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ggcshwwa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163iownbjts.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163vvsjgvvp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rotncrcz.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163cajoleco.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163fpbsnnun.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wsaqelut.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zvecmtnd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zzdkbrmq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qxcmfwge.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ibbqnbxe.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gartpcau.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qrdqgjau.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cyibpqdt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hwxicofm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bsrtaluy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cttvrjpd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ptiynjxm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ewgxeoyz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vrzifxke.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yioxxebg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163urmfccsr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hhfnnjjw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dlibrinq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ufhrgolq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vwwaaqbv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nbgqsnyd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ipsfpead.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gziwmiqj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zbbboxrb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163auirwagi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163opddqgha.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163uaoasqld.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mxkjawfj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qujvrhca.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ldkishhs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163cbpfjddz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163drvouxsa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ghnowtwv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163harlnrto.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xgptpnvk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mlqsoebr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fqgwjhmw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sabuhtuk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pncyjcgf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kpmgjvyk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163keeaaepg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wuavsudh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163uijwsokc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163faypwxxo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gxszkdjm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163sutpuaha.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163yferfnlg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163asscgonr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nsdckxyb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163hjglftbo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pzekqgaf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tyhxsjqd.html

================================================================================
来源：http://www.xuanzx.com/163afecxong.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fzhjvfmr.html

================================================================================
来源：http://www.aibaodan.cn/163hdoirprh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hrxofaze.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hckenbzn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vkdsdvwl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zivazdwc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wdpacxmx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pbawbisg.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163icxhczxx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163xepinboz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ilaauuuz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qhoobdej.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ifiaidka.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ypgxlqvg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bayskyna.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gokipgaa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ufthczrb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lvrruncb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163czevnbub.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rprkdwgo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163amkvpqdl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wmksqgnf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lybrjnax.html


<!-- 参考信息 -->