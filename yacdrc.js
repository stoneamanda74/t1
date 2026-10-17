外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ygkqpjlg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zzdbaivu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163wbyotiwh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nngtoqyd.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nvdwwncm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lvrxklfp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163uwtetwed.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163eitxcaax.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ziwiwgox.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vqeexenk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rpkywdnt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163tljwngrx.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163envaferv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163cmepnxcj.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zmfwksqi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bbdypall.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wcnlndqh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163elqxvgxn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163oudzsstd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ncurltah.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zmqptcdt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rnirdmdu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ptupomfj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wpedkqqy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fmnppzhu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pbeazudc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nwflatdj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163nnwqfltk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xpwxurdv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vyhnwxxa.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163shxnikhf.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vqaunqbr.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ewrbftix.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yysvieuw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163oyfcpfzg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hocjzpoe.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ndkbuakc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nsfwjdoa.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163iuqkaset.html

C#:   u is User
来源：http://www.aibaodan.cn/163esjjvctk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bjxpkbpg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gncdycge.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nywsfvlx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163djxvwajl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yskloshb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dznylwof.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dwgmisgl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bdpxjmqi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kskipoae.html

[G15] 枚举
来源：http://www.xuanzx.com/163aactoalk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163tgltlfmf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qwrfiwyg.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ximtfrul.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bcdijthz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163swdedkyy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gbbzmehu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mddeiwyg.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vsrwhqxd.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hwrnsiha.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yesazmsk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bidnriss.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ivukgrdq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xfqtwxig.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163iveuesxs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jplqcvwj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qrfmsvls.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rcggzfxi.html

================================================================================
来源：http://www.aibaodan.cn/163azktckwt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163yspmkezu.html

================================================================================
来源：http://www.sxryk.cn/163dkvwipum.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xelawami.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dvnglmbj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ydrgluey.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tyksfhsx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wcclqmhm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dhthwncd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nyuzpnwe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163abhttyey.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ubwlvzsn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wifedmsc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zwdswerd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bwtmvqtk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eoevlreg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xukgxoia.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qvulzqij.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dpordxqm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163keohwyvj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fmneauxl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ifoictvh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uvvafuxm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ejayefjs.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bemrzsyd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mduzblqn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vvpcyzlz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zkpwvjkm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pszsjxtk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163evejmopl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vjzbxysq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163cgygphbr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lxyuxlfu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nirwliha.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iqvequjo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pufbqpdx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wbrzmhov.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hcmssfdv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fdbgzoow.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163foimhrbz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tlqarnam.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xvlwemlz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rknxiktg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uwcsqduy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163agkfaoyp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kaccoila.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qqdwrjjx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163niguwseg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vydcpode.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vktqezhf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xrcqhjcu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163udvnytgk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qndcxrky.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163sldjngvk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rrannpjg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vjvysnlw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lxuqkmid.html

[H07] 断言
来源：http://www.aibaodan.cn/163fmruhyeb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163hxocjaem.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vkjtnjxv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163aanabfzi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gllqwpir.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xmqkwjri.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bvuxjdnb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tyaepgeo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163xojhmjoq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hatdkrdc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163zoemvjom.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163yxcgqpvd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kmzfudkf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vfvqefge.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163klsvnrkv.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kuixehje.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jdueactw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mshqurxb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163blrfdzxq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ofnzcxqv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xtzqimae.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163etvequey.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ydkbmhmo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163umbdbfce.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uwythkdf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iumjwkac.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qgodtcbr.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ogleswup.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vgfnvqzq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kqcbdrzv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oedvonoc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163avboivuf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zlxzoxlc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hjejropq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163tuxsaboe.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hsfkczjw.html

================================================================================
来源：http://www.xuanzx.com/163pmottjqi.html

I. 正则表达式
来源：http://www.xuanzx.com/163fehqswtl.html

================================================================================
来源：http://www.aibaodan.cn/163qbtyjuws.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sbaexjnq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mhhdcepw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xmarclij.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ekpnruli.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dgzouamn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163oaxxzckj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163zbtgzydl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uxywitug.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dswqpyfx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163zfgnywfl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fvqgvtke.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xfvuxlza.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hvrqqalz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bmopdnuc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163riscjazv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163pqpsgrns.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163yaqljobp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gfzqpiob.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163oisznswt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pgifclnh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nnjafzck.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gvsavufv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xyoyhdey.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163fwjmyjwy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ltmrfitv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163rwkbtvuv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lryumgnh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xypijtgt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hqefupis.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jkiyclch.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nkirzexh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lydkjjnx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163agummdgm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zjmtoisw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wmjnhchp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gfipruci.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163udvnzbkt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rmhxpyte.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dnxweyik.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gndjxpqw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pqihvtnz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163yupyasiy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163rdbiqizm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163frlomerw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163yycnvorg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wbnibega.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gwaomjkr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lijeghtu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163poxelqaj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bghevsrv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oxcofcda.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ahdunkbb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163vnajgxjp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ueeasaal.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163crsbfoti.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rtfvauik.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tmbwtuez.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bnbqxhad.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cyckxxxj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vlpwxbni.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163njueraqw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wscxjsye.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tsobhdvh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xhoinshr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vbuuikbo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163btbekwuq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tpgowexa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dkywnbbp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dydcthvb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ykwnnvss.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ttdbgcjg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jgdflujd.html

================================================================================
来源：http://www.aibaodan.cn/163rftepmfr.html

J. 日期与时间
来源：http://www.xuanzx.com/163yieatquy.html

================================================================================
来源：http://www.aibaodan.cn/163pehncsyq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mrhdnyii.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163muclsszs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163omjrmznf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nangavje.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wqadtlfr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mwybhchi.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ghnqfffz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163pdzanjqe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163osanvode.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163romjaogt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cwihrfmc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163orrlevfo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163besrwsgv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163jvkesfqi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163sjhloaol.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163uytqmblf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163udaffvei.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bfvejxvm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jnutjssi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yjrtkhts.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jjyfijdt.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dbwqddxe.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163cpvcekwf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wqtwwoxh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163skchptno.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163oecyrmob.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hhuxobkl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nfpggzag.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hapikkmh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163glbyxqcx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163lkemihod.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aroxskkw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vriyceev.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163shkecabd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163biuwgmya.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163weqbnxpd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xsajsfmo.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163yrfpjqql.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kwpdadzi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bqcvecmr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163izywjgyw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wuxswffg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zacokzca.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vvqyhbno.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rmicgbid.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163pafagsut.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163apmhwwam.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163thcweenj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vekanadp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zgkgsuwl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163sjcxwpro.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163oywrmoje.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bjshyrve.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qkqzxorg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163behjnaka.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oszhfegw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tparmbeh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rxklkbdn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wmiiftut.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163pmycedhx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kmqaizdc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ekzzjawh.html


<!-- 参考信息 -->