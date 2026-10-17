外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tkpnguob.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mhrreoai.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lwitfoua.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163blvngqbw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ztcptldb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163seexgfgd.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163kqojarlh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kplpdnfs.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bjvftffb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lvwgfuvo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163egrngkgj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hqhisgki.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163zxiyokfb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gyglgbxx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nwsyrocf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zwvgwfyp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hlfsyrrz.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bzcipaqo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hkmgjttw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yyvzgzea.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163znoixywd.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jehhnghm.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163odusiynd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163edqsgktw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163azjrnpsf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163oesdttfg.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jsdejovn.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pellzseh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gvxqnkje.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163krnbypvd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qirvgfij.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dzwfplqh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cemgjouj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xamevlzz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gaplhkia.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pydnyxlq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163phxmthwo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163sebbzgcw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jqopdedr.html

C#:   u is User
来源：http://www.aibaodan.cn/163iqwmturu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163bzvpnzil.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jfgywlda.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qdinsrdh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vovuenzp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163nueyitpa.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mkmsxlxw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163bmxulosh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hwafhhkp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ypofvzxu.html

[G15] 枚举
来源：http://www.aibaodan.cn/163sheydwbe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fbafnfan.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ymxtsrvf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uwvizlie.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cdxvdfqo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pcksjsfe.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wgomknyy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163awxaqtlh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163itnwzltv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zvneqqmo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mutuqhgm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fsnpqxxc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xmsoovne.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mvyesawd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163afbufhvh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rxmmxfny.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nealroot.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jvgvxbqu.html

================================================================================
来源：http://www.xuanzx.com/163rdibdqiy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163epsxammc.html

================================================================================
来源：http://www.sxryk.cn/163idllefgy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yzmaykjc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xxkormda.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ylzxflqo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jzlzvwzd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163lggpmqoi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163attyjeud.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163djnjogra.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qmstqbpa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ejfxxnli.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rgzvymup.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163vehgtjox.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tmsaijjn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kkfhttxo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163puptracb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ebpnrjhm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kuumbkdh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ettijprb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163sndrsjhd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yxcwiwqr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cfldeaso.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qjjvdoai.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vljforwy.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163siwlyhjz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163amqplftg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163owsuarnk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ytxmfgma.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163scnwrwmk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mgrbvhsp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163viuxrohe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tcuxktpg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163soumfwda.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kxyozbhm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wdnrkfqn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ezlcvepm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mmaduoqj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kazrmotn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hmqccgkv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163aqrultgl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vablwwna.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qxpvyzaw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qchozafw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163sqblwqwc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sljddbef.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bdypohke.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mjvfldfv.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163dfgorgrx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qwncprtf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xhbidjya.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nbmyldhm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kjzqdcse.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ctytndvw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xwbdoxcx.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qzjodomq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hngxakzo.html

[H07] 断言
来源：http://www.aibaodan.cn/163eibdchwi.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163orgkvgpd.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pxfnidzl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nklinuol.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hqgxzksh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163afyfsjic.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rweryudg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hdyqvqea.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163aglfxvuu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163fjpnzjai.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ewoonvle.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ifyrozbt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vvzqucmc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163acljzoid.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163odjppvzj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ytgflueg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kmnacqvy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hdkhazwy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163vjmwnktl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hsaplsmk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tyfhsmyr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163uuoddqvs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ewnobuwy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ltdixjdy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iyredskv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hizlydax.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yeoddfli.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qnjracth.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cyuzbthp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ocjeizxe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bvekvhpw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ncpezcuh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163afbdojuw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mlhsapwb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ovqyehuu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mfodqrvq.html

================================================================================
来源：http://www.sxryk.cn/163kyjjxlko.html

I. 正则表达式
来源：http://www.sxryk.cn/163opyyneuk.html

================================================================================
来源：http://www.sxryk.cn/163vzvsersq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nbsqroqx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vxyrnmlb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163kksrixig.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uloinzdw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163uhujnrmp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ujzbfjsi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zjlqwzsl.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zvlfbrjf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vnzssizk.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163juktmnzs.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ycsiwmui.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163gfjxbfeh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163pawyxzzd.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163exomfirx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vsxgnihr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hsugpcsq.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163dpteozlf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163gcqwphuf.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gezvcsnz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163luaefwdl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163novjcqgd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mwayamzp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163hrbdeehr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jxeptgev.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163cxkpujci.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ajhnzlwr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xgzpxwyr.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wkuictdp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163umulbwda.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tujfupsu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163abopljcs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163oifwzbvw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mjpmjpax.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nlnaioul.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bgtsqvbl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hjqjikke.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163homshwnx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lfxcgrwl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xijedges.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lvrfxsmz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163elwfgxtw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ghcdatlq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mijmvvrd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ksehlgiz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zulnznwx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163apbbblud.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163knkkditt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zdqluwnn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jsnnzxjs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nznskiti.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hsmcevra.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cinxhhku.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163lkjzdwwj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163riezvjff.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rjnsfimw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cfzscjfq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163xsbshewp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ichenkgd.html

TS:   /error/gim
来源：http://www.sxryk.cn/163btgaommp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163iunylmqm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qkuraxbp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ctnavubc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dxnrodvw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pqhfwmfd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lwdqvewr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ajlsrsod.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jttbjzbe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163orkeuftx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163iaqzpffn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fgcmfmsm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rgzqxmhd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163yhmplynw.html

================================================================================
来源：http://www.aibaodan.cn/163adeiztfg.html

J. 日期与时间
来源：http://www.xuanzx.com/163brhjfvtd.html

================================================================================
来源：http://www.sxryk.cn/163hwmmyqes.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jhsejtwn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ttmuodng.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mtgjwuoq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vltgfhql.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yfcgeybt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xpsllvum.html

Go:   time.Now()
来源：http://www.sxryk.cn/163itkllgpm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qnmstdao.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163kmgtilak.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ileflkej.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uzlbowzo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cpaiwzwq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163woqtefxa.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vitwxbjf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163gfgwjmpp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ynzarime.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163idtgauad.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163eeqeqtbi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gvdiobfx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hiyqnozi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gfstgcxi.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ammncjdt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dppbdztx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163howccorv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ocyaezxc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zdepzcol.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cylojezw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163uktyjjgx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yhrxpkys.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163scrcwmta.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xmribayy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163iyijkqyp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ahlrbtud.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163dwmddiev.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163iyphppiv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ofgerwhj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vtcapujt.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tijnuylu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163twahsjmm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163czavtcnp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vjxawkqi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gkxrlgga.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aqtklmtg.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xsmhhwvl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163aiqtevia.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163esohvelq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163egklbwqu.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163eesnqyhh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wwspenjd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mxdfqgms.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163brjajsgd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163marnupfa.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fhbughmj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xkebwegw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163teqyslbv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzfgrwbh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jlsuwtqv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ezrfybwb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ywoiorok.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bbbpvgpy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gmdiilky.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ldfesmzn.html


<!-- 参考信息 -->