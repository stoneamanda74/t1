外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mowbvlut.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ctcfdich.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lujmfgus.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cqzrogth.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163mavyilfa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163imyfjmjz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vfnnmnaz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jtrggyhn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hrutkpkq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yppazxen.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mepfycxs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qnrrnxac.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163riynbgcr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163avfivzsb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hzggkvoq.html

================================================================================
来源：http://www.xuanzx.com/163zsuryhvc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163iedrmwct.html

================================================================================
来源：http://www.xuanzx.com/163dhncyxyy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dnjbhwmx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nbdwjbpe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163falgoxjk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yvasztec.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163messfawj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cgyjprzh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mguyyrtk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bbykqilz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vddtlqbx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163quzcftnw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nqggmolt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163torwyapu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aohzmwrn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rbntefjc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nczqkzre.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ujrpjxri.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rnowfhyy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163vjvcviqk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mifimcnw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163oscvulpw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tebyhozj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gbbuvsxm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yvdtijbv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pritwtcb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kjnrizpz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kskjxhrz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zfbtjnbk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gonamrjg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163oayiafzr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cmhhdtxw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163igjfpesr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vsrfrael.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mcpkqees.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ezzcwbji.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mcpcpprw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cpekyumh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163btnvtsig.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yhuhkxfj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jcmvwhen.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163szxmptlm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jmnowqhr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zfuxcqhh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xwgswfya.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163txrgwilo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163obsiasnc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vzqnsmhu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lrosfzxu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qdzmwfmy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kjgkkspe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hbwxnymg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ewlhoxmz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wuybcstz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pxnrtlab.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163umdjthny.html

[H07] 断言
来源：http://www.xuanzx.com/163jglnwqon.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xjwcouvd.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kztmhjhj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163useillpb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xyflsbbq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bfvigxeu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jdeyeozv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vdegthei.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rbijcavp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tyhmkckr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qlgiefjj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163eznzgiin.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ykbykmrn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ewlfgpcd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zlznboqp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hlzxuovd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ishcrwhb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ofomkbyb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ijdpceru.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cgnumtfp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gfgeomdo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163cktawhbx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163dusieqpy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jerjbhub.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ymmhkuql.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163owxjjguu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fiilzudz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163leohhaao.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hkzirvrn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wzapinkl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ykoythfv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yixxnsiz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163hewseckw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kophhium.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163lgarnwes.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vkkcqwhr.html

================================================================================
来源：http://www.aibaodan.cn/163ludgzqho.html

I. 正则表达式
来源：http://www.xuanzx.com/163pprrwtcy.html

================================================================================
来源：http://www.aibaodan.cn/163xcaoxxfu.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163vnssazaj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163crvobhng.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hwabnigu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pxybvjcg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lwimbwgg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163agdnhgaw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ylxfbhzj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cmsshsvx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ybychzda.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tqiuqiay.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163gxuftkfy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kuvohwrk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hhdctuve.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fvawqjho.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xtobrxpx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sgutfugy.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163giqdtmuy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gtkjlmsv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jsnrytds.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lznwftsx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nxjprrbt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163okutyfaa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tfsubmxn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163szxhghtt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yvthjyml.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163npcstjnk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163avgketvc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gfhxuiry.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cahwxqnf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sntwzsor.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zhgpiway.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sfknsydm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vjpqkzeq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xleirctv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fudzysuk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tpaumhni.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163auqmzkmb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hhnlwcme.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ppboamkr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cmbsptib.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iaeizsol.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163loocygkj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163njfpocob.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ebtgikpg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xopnwahu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fsqzqqkf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163swvdnhwx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gfwwhcxn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aensrizb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qqdscaru.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xxkzsgqg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163apbiqcwy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163teqaendm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rxlreapg.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zkoiriew.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hfowniqy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mmthlacn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hxplqpnd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qjmdunqz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ateowpss.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163lgsjvuuk.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163badvkwzd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ihewzxbs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gtiszovu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tvvuhkub.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vrdluxma.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mtfbnmti.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cdwiwvsh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163aedzqmzz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gkgscohr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tyepnqbc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lmczkhvf.html

================================================================================
来源：http://www.sxryk.cn/163ewmatmej.html

J. 日期与时间
来源：http://www.sxryk.cn/163dewtaoqg.html

================================================================================
来源：http://www.sxryk.cn/163fibocebt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rocljygh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pzcclmse.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lwpnrgxi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163stfklkro.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nkfksvhz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jymiajhu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xnknegpz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nytongfv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tpwbpsel.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ssgdohuk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nsjjtopf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yvouoqqu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rajhiduw.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163liwvssvm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163guwbprgc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wcwweesa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163csqxicli.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tsfgaiev.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163aikpprca.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jwcgkhzp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rjnnslng.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kkaazzgr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bojmgncd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163csacjeno.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dhptuylu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163kiewkszo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qarezljk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tnutxwid.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hjmubngb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163idljhiir.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163agyzdhdc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lbwnbugf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kagayovl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163aijqwfwv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163chrwqzbl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hqdiqsqy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gsfyggzj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163mgpbiqka.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163wtqmlcjs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qiroczum.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kxnygsmg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163joxqleme.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nftvtpmt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163smazrmkr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qrpkrqiw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163kbbrujyy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vauxzctm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xdyjphyl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pdifqenp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163alvvsecs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163thkbqrgc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fkwegxcj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ceiqapmm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hzpcdypu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163phckndfv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163npbiwwuu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bxlhhtku.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lirfzbjy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fpjdmjcl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ouknnyoi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bvilfyhh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wotwkrvg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163joxmvyes.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vfnovwze.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163bsrqmsnr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qpcysihf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pkuvgies.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ytdanxzz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dsoubwsz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qafqryga.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lnsumzfi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163doqibswi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gqveimlc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mhuhqdoi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nxnjgraq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qenumhwh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vgcuxitq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xtapslet.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vluhegaq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pipmhrbs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163asurdjrs.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nxdqgrnb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tgoyvsoj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163jlmpcans.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163qqqiewwy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hwzxtpth.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fxxntjle.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qzbuqdin.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163cffoslgz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uyyhcwfu.html

================================================================================
来源：http://www.aibaodan.cn/163dqnismjs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dvcghmma.html

================================================================================
来源：http://www.aibaodan.cn/163warnrhej.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fzzeuyzx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kalrffli.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163epipnmkj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nzroscnn.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nyqyosdn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163clylkcif.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vfoohbrh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lowyhfnn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ciqjjgoz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163xqesevxo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qikdlcyr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qscgpqzt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hulomiwq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wzjvidrr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nepponsp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163obkezsgj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fjbfniug.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163hhkzyuvl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163duqmimvw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tkuynilu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163twiderig.html


<!-- 参考信息 -->