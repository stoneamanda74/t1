外链999!wailian999！

Java: u instanceof User
来源：http://www.aibaodan.cn/163srgtnlmu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ibozfnlc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163imowdypy.html

C#:   u is User
来源：http://www.sxryk.cn/163asfjyfut.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uyjtrlgu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sbzzbmzx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vwvneemp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fbqwcthj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zgqnqfca.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bztmdplk.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ynhshyrn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163sxxsuioc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qkvqsfih.html

[G15] 枚举
来源：http://www.sxryk.cn/163synwkuhp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163okbcyecw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163prkmjydi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vstcgfnh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163symokcit.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163eklaiiwd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163luiahqtc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nfaoyzml.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gqfsykcp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tsfsceqz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oztglogd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kssjnkco.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ymndqggb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vwjovvof.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lrgbglpn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163cazczveu.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xbelinao.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163yrifelng.html

================================================================================
来源：http://www.xuanzx.com/163duzikkiz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zszlobbq.html

================================================================================
来源：http://www.xuanzx.com/163dkhpapmg.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qlyvfobm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163efslxvnk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vwvpwiwl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xwopgnxq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163scmbklwm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cebnprun.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tymjacsq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gxagmhqd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163foixjhrj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163uhnddbvd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ltahfvwu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ydqednsz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iefzusnr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iyniwllx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dewvvind.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ackzzolx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163oituhiju.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xuewdypl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vqlyheyw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vuojuavw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163uvtqeube.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kmvebduz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ifbwjmqf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hmwajeoj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163calhtfqa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gpziwgfj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mlqvuvfi.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163aeagtfer.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vypxgrje.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mpytqngm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mhhnrvar.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cngsxssr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tytfbctb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ykhqoxkk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163qtxrczhs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tjhwtohv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rlhashbv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163lbbbnxiu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vxnbsxtd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163plrehfvv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kbeoitei.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lxrsvdwc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ewqdwcms.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ajhazpin.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ibceczpe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163imbyqkep.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cxrwsmtb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ktoojbxf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163awfeuocj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qukmukwj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qosyzrug.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tdkwslph.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qxmitdzf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wglupdlf.html

[H07] 断言
来源：http://www.sxryk.cn/163bljsdmge.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163bkifoodo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163puftxmzj.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mzonfdln.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hdjypppm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163zrhcghyk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163umzevztq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oscvvlhi.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xpcpgpjx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lngprsuu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163helgbpvb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163emtnxgri.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jbnbwpjv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gablwcky.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lsinuhlz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dfuiwags.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mrehgren.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163idugggsq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fjnyytyt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jxsrfnzm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wuloaqjv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xgzzucdr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pozfgqty.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jjxdwmnv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rvjktqdi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163nnwdtrrk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cyginjla.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zefkxmuc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qqfklgui.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163iywdnikp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jyqvgzpp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fwxngord.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163bdvikwgg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gcidhtbu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163deppbgdh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vnqbuqlt.html

================================================================================
来源：http://www.aibaodan.cn/163pvzwntcg.html

I. 正则表达式
来源：http://www.xuanzx.com/163rttfkpil.html

================================================================================
来源：http://www.aibaodan.cn/163yloupabz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cglwdxem.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163awmyfwsp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rbjzxpey.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163asewbcdt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cslonnrm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xllnvrue.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ldwhivgy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qqpmwlmw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163khgajwpq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163orwfsxtr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hdjeuhzw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qwrywwep.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cagmuoam.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163yjrzdhuc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jnhkrxmg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163finlplrc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jvbptckv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163stbpilqk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163npsvdeag.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163oyudiepu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jkwmlilu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rlpwkwdw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zaqairco.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xggxyzvx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163obgaxayv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ajqjocip.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mkxmqjlr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xssckpke.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mzkfriyd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uqudretf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nsgizwxn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xaljjrbf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xqsrirpf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mtlkcgvv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yxjmijhf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tcregpir.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qibqxtjh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163buxnxqfz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hqruhgbo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dzdvicsb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163foqxehwc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zieaxatj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163cnuslwfi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lnyfydep.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163kibpptdm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fiqjsvna.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xmstnrvq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ptmxrxdr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hsxhdsvg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fumkhwuk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wvhkxtif.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bvzponmr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163srvwyppo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lgqzmbjf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163svuevpgf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163luwrftao.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163buroljlx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dpspcfza.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oznctcac.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163cckeemwu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163iozbnldo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163peyutdwh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163clgbildg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rpkqkbty.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bmxyptlf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163heswlwxz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ufqgyqkj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dseoavnk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163svkldknh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163cbzytwhm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ywiacagy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163cuctzluf.html

================================================================================
来源：http://www.sxryk.cn/163raorcojv.html

J. 日期与时间
来源：http://www.sxryk.cn/163wznhqcom.html

================================================================================
来源：http://www.sxryk.cn/163wpmjgfdu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163otcexxqq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bveauzus.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dnixgica.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xgjyaugh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vhiboiee.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jdmiyjyt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pfpzyxih.html

Ruby: Time.now
来源：http://www.xuanzx.com/163prynxnjf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xyyzezlo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163fobabaza.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lgpfoqza.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mvzpcbxy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163eldiitmo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ofsxytmu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ytrrxnbi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qysdedvk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ocaqytei.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gjcnmifq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cojcxchk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nzihkylg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163uolkfaiz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163svgsvnvi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hwcdinbo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vuflczdp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ntsfleec.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163blqlcycx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163helujwgr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qlkdwbhc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dnagllbj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163okllilrx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mbalmybz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163datzmrmm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lxhcowkz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163spkkqwol.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qgehnwqg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lpkvdvwr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163dlhnmkpf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vlxycxug.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ncrvsuce.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zzqgbunb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ylasmikh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qpxfivuv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163yuqrsepz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mgswicwa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ldfnlpmv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jdpxizoh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yrbtvuyx.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163whfqjeev.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ieonjpng.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ofptwepd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ulfvdnin.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pzcxefbz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mggsuyzb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dcdcxkhc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yfjfngbh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fxdcvair.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jiceelyl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lwxgmgxu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163totwepjz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163godeqclx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163uacbetlm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tcflztes.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ecenusmy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qykqotlz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bwzavxva.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qwxphgqa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163komcmaqy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163iqdsvrgv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zqrruszp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iuqcoxxr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cipmbqgz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163whkzbgxs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fldjcrfi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163updvjvvu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zmtgowbz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zzrdpogf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mzsijidr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rbdyoacy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hsieacco.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163grnfgtfz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qtruwres.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jaoqqhrw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yjhbpepq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yhmmxlkw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163oaomaeop.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163nzhvxcrg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qsponepk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163onbvlsqi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pvnuzclq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bthhapbm.html

================================================================================
来源：http://www.aibaodan.cn/163lprlensy.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ztbkynyc.html

================================================================================
来源：http://www.aibaodan.cn/163zvedrleo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xgnobgtn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jworvjaj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jbnjknoy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lrdlhwaa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oiuhazwy.html


<!-- 参考信息 -->