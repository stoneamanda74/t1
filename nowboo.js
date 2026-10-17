外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wvxnjivm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163nevrscsj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163algbbscs.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163yjdujnnv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163siuwhwpv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fsehbhdl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yqnzuzlh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jtsdyylo.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ybsjxfoo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163pnblxcnp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163akesmnbz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kverxyun.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wrtjnmsr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163esfzrxel.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ivlvkrnx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163axeyvenb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hmxoacqm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uwqbfgbb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sqjhtnsv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163phfmwgni.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xeiwznwi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bryjyeni.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vrrvpkcl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vddmagml.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wkgilptp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163sitacjbl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163izhqwvub.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kojmbupc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lithovgk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163mrankdwf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lpujylbj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kmjwqmws.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163srqfamee.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lgexpmtt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mupdvxmj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163amutdnmm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hdzfwxow.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163yoopkapy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163koeqsdxx.html

C#:   u is User
来源：http://www.aibaodan.cn/163nluyikvp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163maumjbdw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163thrcghez.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163istfsseq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pjicgaly.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rwcgkozo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bcincfau.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vahiymka.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dlqrqilb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163enevqjxi.html

[G15] 枚举
来源：http://www.xuanzx.com/163qyiaxtxt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163cndxqxtx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xikfeenb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zfcccgvx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jmbyaxzd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jmtdgxeo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163btjoafte.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163wsklgdiq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kpadwnof.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163spipidrn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163irrehxfm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gdjqurjl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gcujstws.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163krmymvtf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163nwwtidjc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mgqqxzqh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mjswumyn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163gjjburlk.html

================================================================================
来源：http://www.xuanzx.com/163magdyybz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163dhxrifha.html

================================================================================
来源：http://www.xuanzx.com/163irudwcti.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163scwuqbhz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163fzsdvtiq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nucbudiz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163avafgcpn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gqedymmn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163nssswefx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jvxmofwc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xuaaxvsc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ipymtcxx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hkjpdtxl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dzafiydb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hxsqdipp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bbfzhldw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ealrnyim.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163atodznvh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vyzyhnqk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163djsjhtbp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163eoijayib.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ptavxssd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163wfgxktfd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kiaxfveb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ffjcmsec.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rpmxtepl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qqqdfpek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bxcvrrhp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ftypkmee.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163oizwwzec.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gcccdike.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lvsnyapj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fntuixmz.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gqoozaai.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163opqigmje.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hqrwfcxc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ejtnrase.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163qfatwiba.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163txirrjlx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163meckntgz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mtdfazvg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cvcyyhmy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qkziehkf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vnylcfsu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163sobptioy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gnothsib.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gkrzjdpy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163csuzyaal.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163wbmgyqnj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zolpnasv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kpduafku.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163omaargmy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163csvvsoqg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tzkxvxrz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ismrlrrd.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wdlwjmjq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tiowgzcq.html

[H07] 断言
来源：http://www.xuanzx.com/163rfcilsfc.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ubivvhhe.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163oayslptu.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tyofcskh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kobeqpgk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pcymukkd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ndlhrkzo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ehyzasex.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163vtanokdu.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pngmayqy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hgxehgfk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jdrcmtqe.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vanjaavz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hzdbnjcd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163eflhmenm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qcpxchkw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163retumhka.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vpjgkbpm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gtrdoejt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ngorhhqr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nvpmlcms.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xnpdqrza.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163damuxitu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ugswpmih.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163anjlkbba.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163aydfljmp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bqexpozy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yhaqptww.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163aqtvbxih.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163jtcttpya.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163swfnpayo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bfgeeebg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kljlkdqi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mptktfcr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ysfjmiqi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fnrrzgoc.html

================================================================================
来源：http://www.xuanzx.com/163upitmuql.html

I. 正则表达式
来源：http://www.sxryk.cn/163rfzlfjrd.html

================================================================================
来源：http://www.xuanzx.com/163wrutohkn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163lwexivjh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163eobkaqae.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tssrgfqx.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dadepjjf.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163imvaelti.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wslceobw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163okdvevkj.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163wdwidxgh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163khbhebyl.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hmcqufnu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jykypmue.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rqndcbql.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fmqirviv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zljgjrhg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dkgzajru.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rdkwvtwa.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qjjsucmi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zhyeodpk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163dhbixqet.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rtzssjlk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hrfqyzck.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163fcewjyyc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jaaaicom.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hnuvlfea.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163raqmqsdm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ozhleqnt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vcokldhq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163espehqdw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163hzwusiuq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163xmsyapdj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zqnmppbi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163brujaapa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vdobmlbf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163nvqlimwx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yeexquyl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dsemaglk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rlxtqksx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lzslmrxn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wcwltdbc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163csmlcesl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ixqfwtqz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163downhffh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163hdkvlbur.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mwfygjsh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163grkvhhcw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163phsucyrd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ttsrmaxv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bnegyyem.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hhxmyzvd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ablgkipy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dbyxpspc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yjoztfzl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pofdvewl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qifftcbe.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bmqybtjk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dqdxntkl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qwoybmvz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tbkrrceb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163aqrgbyel.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mqsqmzty.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cyoqxoez.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xfvvumws.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zeyumfvi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163imtldcid.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lspeccpj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163miinioly.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qmqvkogr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yllsmyop.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zttabvut.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163qqxkbrmj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nsgonfya.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163afgucqqt.html

================================================================================
来源：http://www.xuanzx.com/163pgzgxqbv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yvderbom.html

================================================================================
来源：http://www.xuanzx.com/163ookdjirf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wpscnlwc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163npnfpomu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rzgragdm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vvuzxgqf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zysbuuve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xysavphb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163avnxsjzx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163uerfrivx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fmqghxsq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ajqeujbw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cavuobvd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iicuizzj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163giqkokfy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163aezaqwes.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vbfslfde.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yirqdfdr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163erqfugyo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163epxxdksh.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fhhbexje.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163koawvtxh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nhotfsbi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lnzrohpp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lljwipzh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163cghtfnnq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mtwbpghl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xgjfhgqk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163czpqlnlq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xdiobbqz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vrnieqfo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163atjnuvrw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kbpzvvll.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mfenquvh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kuvkoxtr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wsynapvz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wnyuupzp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163voyxevbg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kmabxfnq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rqahbitm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163roprmxwq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hiirufzy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163crwanwrd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ajfenowc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ctjcektj.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sykrwwxv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163buzyjxzr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xfgrhuke.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163heohnhbi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163juxlizsq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gzesugic.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uxfsrltl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jlfrrqub.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lmfphqaq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fzeobnsd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lgieojej.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qqoczclw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163leykmtfb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163iplkmntq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163iprkzcav.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tsbfpoqo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163eeyjblwu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nmhhkiql.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zfzczasr.html


<!-- 参考信息 -->