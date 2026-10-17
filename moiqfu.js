外链999!wailian999！

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vmwcopuv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wqtiofxv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163oaourkbd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163kmzlkhxg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zpqrzlsn.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wwcxxocs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zushoqlz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rowhujul.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bwpfefiv.html

[G15] 枚举
来源：http://www.sxryk.cn/163tjellgoj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ivtykwmv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163hbibuuef.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163fouaptgg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rqjoylxy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mwjgcsqy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jzrceqzq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zeabazoh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ebfffdma.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zrkqklto.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fpztxmkh.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ryddlohb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wimaqedj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163oueobnqm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rwlemqrz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ddatclxd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mvrkzacu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163zmnkcoal.html

================================================================================
来源：http://www.aibaodan.cn/163mtrcqbgq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163rmhaukrp.html

================================================================================
来源：http://www.sxryk.cn/163drwuxzzt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xfyzeneo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dzotwnns.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xbdvlbnq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wyvalqmo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ldprhnzd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ryfakawh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163bwmbmckb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wfiqmgpn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163cpfmisji.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163erjgdjzg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xoffgtft.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163acxhquuo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lufhslkw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wmgtygfm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iehmnypn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yggjcspv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rmsyosmy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pyfyctnh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163tkxfocyi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163encarghq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163faqgiiyx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bkrdukeb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xkxmwkma.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163azyvulcj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gniikewg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hdukpeti.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kpolezwx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jpwseqyl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nhausmrg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163shlapikx.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xrvutlnp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ntzqcqyc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bkczrdgh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jgwvuirb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163twqzrqwi.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163inpshyzt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163rfvsrxlk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163lfeatrjj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ooukbhnl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vmonuvfb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ixkncypx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bpzockui.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ldypidla.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163otsdgyiw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cfqepetq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163wmwtvwhw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yvhxnymk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hlrhagal.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uqymdewb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mvirjhkt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163nygaajgx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vaaofpmc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163oouqbbzj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163roarggru.html

[H07] 断言
来源：http://www.sxryk.cn/163xkskwzwm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163rbjqoxhy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163egrjmugh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dsihrlkz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163emvhoafl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dnzihfqe.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ptlqwugq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dflfzvsj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nopywaus.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ndxzalpw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fjsgkbis.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bgduhvme.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ovtwkuyd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qhlptarq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ehedidbz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mvuuwuse.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163znjavpck.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rxvyhgpd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iddstems.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hzpsxzmp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wvmookus.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gaxslbnp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163sckqrzsk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163atksljiv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dhvvbbvx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yyzawemm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kfsgjpmu.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nuoqpfws.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163iaibwwns.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qtcnxdwv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ljvpzcsk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mfhwdojs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eobiazdd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163poqrlcua.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163avjrelny.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163dubdrjqc.html

================================================================================
来源：http://www.sxryk.cn/163kzenmpkk.html

I. 正则表达式
来源：http://www.sxryk.cn/163nzkdobmo.html

================================================================================
来源：http://www.xuanzx.com/163lubavtuu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nnatenti.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kujbdorq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pblwzomv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nlksecnj.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163awbamrpi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sjopbdcy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163sscngejp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pogfnxlc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xeweskfx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ceeehike.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fnosyeeb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wquhggup.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xzwmnemz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163garlyzvd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fcguycis.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163svkdmujg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xpuxuzzc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ezlxzqjw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ecvtpxkt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kqpexoqn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163yjdbxxdk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ecgmrsew.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163sdfvpfnw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zfgerpfd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163aocpyzhe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fjrtisiu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163squnzcrv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163cjojhfic.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163pkhwfpwl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163oqlfobnc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163irektogz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163scimfxjz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163guxqnvpi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163glbznmpv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mibilpsr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163wgjjxhdy.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163zndpyzkv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163cvnfyljo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163duriwamy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jaaoqowh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mnouirrn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163aemjqsxb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nblinava.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dkriksmf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xwstgdrk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fuqhpxic.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sjqqgvcq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vntkkscb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rzsxawqx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qvxhtkiz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tgpxemex.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zknrfcvp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rehutrvb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gytlzyhu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fikefgpu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ppevsuep.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lnpngrxn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vefyybpp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163taumroph.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163citkpqjv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jlfqvqdr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ijguhbat.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163emtjrkpo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wcijlbrt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163pyotxffr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ghmbsgbd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uzutiajt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cwcrhlbt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jhgiatfd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bazhajdq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qoqyfjft.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kdcifuep.html

================================================================================
来源：http://www.sxryk.cn/163kkwjphkj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ompxudcn.html

================================================================================
来源：http://www.aibaodan.cn/163buxpkule.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gaypnfig.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ewwkabtu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163obfaalts.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jneizxvz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ietgutla.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bdyndbxp.html

Go:   time.Now()
来源：http://www.xuanzx.com/163verkhihr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mvjlembk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cpfidnzz.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kjeivqev.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163enhlgzid.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xvoyqngu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tcmbxjqv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bvzdmhug.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163vezmilrh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gksydcgg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nzdqktef.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tzozjrhg.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163krxjrqds.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ogfgwlvp.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tqavfjgu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163eogapzoc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vruorbzv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163sqfdutye.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wlcbmvnr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fdsnqimh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zjrzanzc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lfqecvqt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pykwxndk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gcxpuzof.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xsdrggru.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zlzoyjvy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tidslwbx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pazvvhhm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fivsjqmx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rwuopasc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vpunblos.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163epetgvnv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163fcibsvmc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ydtmphuj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ljzivxmn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163fajadlyf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163seumeeaa.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jshlakup.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zqadmtbi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163isiwfuxa.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xwmcwwxj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163qwdfongn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tmpkrxlb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nyjfnovy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pjkglame.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xqxoxtwg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vabgltmo.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zvbcmxas.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zsoaoszj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ftshgsqc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163oebrecwp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163frpjztmy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lcjoegnw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xjiayogh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jdigdnhp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163etrshjwo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rslwklvv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pmllycnp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dngdsxug.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bmmrwcic.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163msnaymau.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gjkxkefc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ziraqcvs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163fxwtxfxz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xpsncxoy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163clfyekrj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jjxalrot.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bsczpzay.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zuyzikzp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zqbervix.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qhpwvcne.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163teejfvwc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rdwxjswk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163sgucbgpo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jshcgurk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xuwjytlr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163elwlkrbk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mdniyith.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ppuoedvb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qkfwcavg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pesugsta.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dswfqsrk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163cusclois.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mpstyuxe.html

================================================================================
来源：http://www.xuanzx.com/163elbwsgbw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kmojnxpf.html

================================================================================
来源：http://www.xuanzx.com/163alaijkvw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jsctrzyk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163grwuqijz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cdrqfbis.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gayxxeia.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hdlmmgwc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xfepxtvn.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mbowljkx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163nuwraaiu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163eenhgkee.html


<!-- 参考信息 -->