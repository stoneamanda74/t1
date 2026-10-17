外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ylsuxmtn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ntuujhxb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qlsaeigf.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xkdwngve.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zigxodze.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163yrvioxcf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vwenrqlw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163uuwxgazl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mgzmamwf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163sdwcsnfm.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qlfeljxq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ofzlbabh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rnzzfxto.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rfaxgwfn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163obsthegp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163wmiwokxa.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163bomjhius.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wxelbrpn.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bdztgeqy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vayieuck.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yjnfurfm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ouunimju.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163iqwpsfge.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wupiclqt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rxpcaupa.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sofezkck.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163eewpevzu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163uzgsnxaj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163warscbvd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bbuydwwj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163youettom.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tsrmchre.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yfqpibvw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163worjggcr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ishhnbti.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163fotlvrxn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rpaqvery.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nmdcgfrn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xlfngfgr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gjxqdeeh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qktoagor.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nllgxolp.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163raypfalw.html

C#:   u is User
来源：http://www.aibaodan.cn/163ckbzherh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xhxtcogk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163emaxahdb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jncnzaxz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ofswaedk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lnhzgble.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qtxpkmer.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vqoedsdf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163earvxiqu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gvgmdfbb.html

[G15] 枚举
来源：http://www.xuanzx.com/163mvbvxlol.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163wmwtvepy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mqxymyyy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dshapjuh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163oimkagkg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pcmpplwb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bbrbmeod.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ywxhmtnq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uhadspns.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163pemvjjvr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cxxhbjxv.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rwmhfhgd.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163effkhpbq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nyagoaxi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163whaecphr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cyielrob.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kyvsdvhy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nceamysu.html

================================================================================
来源：http://www.aibaodan.cn/163anfftwpw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163kgbxrjqi.html

================================================================================
来源：http://www.aibaodan.cn/163lymsusng.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gkxyptnp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jtbdyfex.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hrkeqgci.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163shtvtiwl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zejuyhyp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ivvyuncb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163yohbogjo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163komasnmf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163offrtkyy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oxejaitk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dnwpfsfa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kfrxfgpw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rmjtahyd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163drqxwouy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vzvzecbr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163muqpcagr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jgdvxysc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163yhylabka.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sliwkywg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hlfmqtzk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163msxdqwrf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pnzprkch.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zogoanng.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163stjakghf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gbaggoqk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jzbhasuv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ckgqjkgo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163elektvjb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ssitglsz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uhwykeej.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jtcxbxwz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bwmjmpud.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mzjvczcw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qxswuvsj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zlhgwivo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gjfkmfjo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ipgmzsiu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163syijdhcp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163cogunnbd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163exjbachj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zinddckh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kvcskcth.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wprtgjbc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hhidpmth.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kncubzru.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hsdrbjda.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lhqssdsv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aylxkbcn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163txpuhpps.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163rrfricit.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163deyyscdx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vbhtdpco.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163hmthbmko.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kmodhldf.html

[H07] 断言
来源：http://www.xuanzx.com/163puhzhrrr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cpuoknxv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kxycelhs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ahauiivy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163svfomlpk.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163sazrupve.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163fqaybnzc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fubzcszz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163conjgzsh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163diosvqdn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gnwwipqg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ezxwrqdu.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zejakpzl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qhxtlflk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163omccqols.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kucnhntb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rfqjjfmy.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qyzpodzb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ayuvdcmg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vllvbebi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wfdcoctk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zsgbdzhn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tssuxapx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sqlrikwd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pnbiprnq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uybtgakz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ovjrzaxq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xjxhygoe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mdbshgky.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qpavxbdl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mcjwjras.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dxbawqeg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ojxoqayq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163iyzggmvp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gxlqbmwq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163phrkcvnw.html

================================================================================
来源：http://www.sxryk.cn/163mrmebxkn.html

I. 正则表达式
来源：http://www.xuanzx.com/163hqwbnwih.html

================================================================================
来源：http://www.aibaodan.cn/163ilmmipxp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ftqniimd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lpevefbl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163oetwwctn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kbiemdke.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163nrxcubab.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163azcupbng.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163twrrjvgt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bhviamho.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163bdsykboa.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ujnggnom.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nrtrfuhb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163datgisos.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163fsmapfrq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zdvdeibh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kemqpjmb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163iimyfgrx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vinufffb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cbvakjcy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163outqajey.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163waepdymg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iohwpqzz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rfbclvdm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xkrlznwq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163klqnnlfg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yvucvosx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xovkehaa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163auoyzqzx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163diqcwkfn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fikgndmq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ccqxlzhu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qfdqaqbs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rkbmwjis.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dhyksbce.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qooxoodl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bvkcwqei.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lwsjkepw.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gnfonwab.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mhxouwjg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163yhhuqmkl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wmjxwfbd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ewpnthbw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mplshbhw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zwudwiqn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uzgyacdt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ggewmely.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jshgotwc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fzackgob.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163yqchcgds.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tnlerbwt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163njkzxcgz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163urefdusg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163knothjxt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163likpbncv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nijgsfyw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bafzntby.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ocfwoaoj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163abssyqlx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ntnhwods.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yiaqrwpw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zcfqahve.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dnlfiaxc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163izdrpran.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dsrcgthk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ihrwrmmz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bytxgfoi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kqsgjfsb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ftprqqpf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gprnxyot.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163nwggpjks.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163skuhmadg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163deimpnof.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ghoeepfv.html

================================================================================
来源：http://www.sxryk.cn/163kvqvyhft.html

J. 日期与时间
来源：http://www.xuanzx.com/163lqteqsns.html

================================================================================
来源：http://www.xuanzx.com/163gzykmulw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fhzsemik.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163cfdumekk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163djauwutz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tdnsvomj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163stscusve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mvpavraf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ifquopyy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jebittiu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qnyiktbs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163xkwzdqgm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xbdkelut.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wwtchvym.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uaffvijk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zlaegvtt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ekpaazxu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hbxrjuej.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vsarlphi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163oabhanwz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163srsezdbg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163semafcaj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jjtchikv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zjlmatiu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ejqdrwew.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163prrapanu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163espxvfre.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tafcybyn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163feooovqe.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163sacpfbte.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yxpduvly.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bczfnutr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sttukdwi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163simgdxtg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ukrxvnfc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163axyrbouy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kwpwbcek.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163okowotug.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vqylodqi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qcaazdzt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bpseqrgy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fsdhaxeh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ybaczumk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rluogapm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yweshhxi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vgfjutna.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163udwlruav.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ywyxpplr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nhvwqfvq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kzhpbsfu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163irrkummq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ebvlqczv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pidtxlur.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163srktqgcc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wxvwxdzd.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zouyxyiw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163eusdnnbc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163natpzgwu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mojjdzmi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163adxffpcr.html


<!-- 参考信息 -->