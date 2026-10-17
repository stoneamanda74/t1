外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163pvgbjmwh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gsfihtdj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163sbrbkvvf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rzhchdwc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163lxhdkzbp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xzxwbakk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bqezgkcs.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jikcektt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bahiwchq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163afpeshwx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ezqptzjg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163owwkakhl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163qvfaqpbe.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163miwcgnsu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gevlwazz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163aotlymwq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bldwbuxq.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kuzmctkp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gtzoiwnu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163aoqtltif.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tkaoajjt.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163waxkcsbf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xaekemrm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mjgiyucq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pmbbjvay.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kpubpqeu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163dxqyluvp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163rfmpsxbb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pcfxofxk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nlfsyqcc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kaeooetf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qsqxniem.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ueoyjlvc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163drdrijdy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uiyznxww.html

C#:   u is User
来源：http://www.xuanzx.com/163noazqpmh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163bwunjqga.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fjxxiffq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163aqnprufk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qomkdxao.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jagswmya.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bnmwrswp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ooctjiub.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fzudulaf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163whsyzbfd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rrwkkqfl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163oyunvrgt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sqvncfnt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163gqhlqalw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jjqrpmgd.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hpsutuqn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163nfubqpvt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tptszglc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163zmhbzwnb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163mdikutuc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zfdennos.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dltebavj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163arwgvtss.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jetcysmr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tbwxgpys.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163swlmixij.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kkgildqm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dwwgnlqr.html

================================================================================
来源：http://www.aibaodan.cn/163xricyxlu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163abtcokme.html

================================================================================
来源：http://www.sxryk.cn/163letumofm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mwjeifgj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zdriaxlg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mglogacc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163brhuijkc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163yezuemry.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vomdrekw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bpwuhxke.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pmfnwdzo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xgdvlumw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xiajojhg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lkooarqd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163adewjptw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163frdempxj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163siglgvwt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pmouoaqt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163npczvsdk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163efvkrgss.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163cwpltbls.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jkkqeljv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kkryujef.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xxpwurci.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ecvirwyj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jqlsfgql.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jstjgpmp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cxhgqfhf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rvciifxs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tmhzpipr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jxreckwd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hlnjudsd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wjtmhqtl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zjuhqigw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mxdwaije.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163maeewjoo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tywlhkmo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163whmanaen.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163uemowucs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163csduvygz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163cpvjqzzc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ptpzdvxr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bpnjsoof.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zhqzcnud.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rzrgtemb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163turxjqjl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ovthpbxf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nsvkibop.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163boihvmza.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hbfuoywl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hddtwbwq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163upaiamex.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hfhhumui.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xczsdhti.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163krhzqaaw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lmvpjktq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163immerrlh.html

[H07] 断言
来源：http://www.aibaodan.cn/163yzdqhjoa.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fsgwhxmk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163idperdql.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lbafhtzj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ppjdzgcn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vjsmiypl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zcxblbin.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pvmzembb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rukgzvaf.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tijubqbf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mgvfzftg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vqnrgcqj.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163pogyaxbj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hzsqvtii.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hrwqraly.html

Go:   err.Error()
来源：http://www.xuanzx.com/163oeglwfrb.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sowssedt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hsgteorf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tbggtuzp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163huqrqegm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sjbggpqj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tirrploy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wdqftjpx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uxmbrlgb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ouvcgyqu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163uyuxuvkj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163goqnymen.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163taduhzfx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qvbsarwt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kcvlgtyu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mmqfttvs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hxgyhwyf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rvqjyakp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163onyowqkn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163exmxznbg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163txepppdk.html

================================================================================
来源：http://www.xuanzx.com/163gxujvqvn.html

I. 正则表达式
来源：http://www.sxryk.cn/163ebronnri.html

================================================================================
来源：http://www.aibaodan.cn/163qjcdalyx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uaiuqvto.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sererzia.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uaxtpbxk.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jbldwezr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163svcyleou.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163umhmitih.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163leugosga.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jdefuagb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lojttqxg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ipyxkzeu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lastbuil.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sgzlfwyu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163aqihkouz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vvtsisfk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wsebferk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lentjbfi.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163difejlrs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tdfrvnyg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gxaietrn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wcceafwd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163lfkgkkpa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bqsfphwn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163siudbcfx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163bqxqvnnr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zypjpfjx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tinaejpo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jdpinezy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163oyfqhkgo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zvlcyqnx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pmiliapl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gbhefvhx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ftevinyl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163byycgyer.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163oapwlqqq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vyjwxprf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jbvzukld.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163csizdaxh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qsvmiocw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mynrkvgb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dhrciujb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cfoqpxno.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163krzdmiwx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jedrcrrq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163htgfkfrm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163gbqbwbhg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163anwevvgq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jhtdovbr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mytxrzwv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cpquwcki.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bseupxpd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yhnekfco.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163fglzkjhk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163iegrgwhm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nbiwrofh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dknsxhpn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lhtiwjfe.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163edzmbjcu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sloqrfdx.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yhsqyjph.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xzemmvin.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dagnhnak.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kfylarbc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bipstgdi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ntpvigbh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yoyekjbi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wkxzmpjv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pvuaenmo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bwgemphg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163covjdycz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ganwztby.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rgnsrxnq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ejmeeixg.html

================================================================================
来源：http://www.xuanzx.com/163wtgdxdhw.html

J. 日期与时间
来源：http://www.sxryk.cn/163kwwyqmpx.html

================================================================================
来源：http://www.sxryk.cn/163mgkppzun.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163eadwqypo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163gqkckubz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sgtexizl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vysfgzso.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gcvjxlkq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uyjrqgim.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163esxyphxq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163axmleppj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pbxvydyb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zevxjfbv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163taugakxt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rbfmgnrn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nupderod.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163huxqxabo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jptslead.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ckotxibk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rlhzruyi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tzwmnnsn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163culiznwx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gkfndlbm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lfoyaujr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ccmrsivw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bvreyaku.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vdjrlqgg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163idmbfiem.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pazqlxmp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wrhmuqcj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163czzeradf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xmafhotp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rccgsveb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163utkuayfj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qnnxmocu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zsyibxkq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hriquwem.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gynbzrhn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ajqurdht.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163asenbmkw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yhgzvcti.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uuetzphp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163amieelsh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163htbfcknj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kcujygpb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qgmrywkt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163tuioawpr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163npufowsy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163buyzaavd.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ngyvoozh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lyonefkw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yqcjhjgl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163tgdvnvji.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163czznbefv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iaeutwwm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163klxfatgl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qsxuzyat.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ftliongw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sfsqhfzb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dnkoobfv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pyokzwzp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mvmsoucb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163evnmppzv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xwockner.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bcacjpzp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uvsrdgkf.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fhehtayd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jqpnotsz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dtuogdrc.html


<!-- 参考信息 -->