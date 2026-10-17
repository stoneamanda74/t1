外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mcvsfwlk.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163fttfosbq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dosckvjs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163jzusvgvt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163twqakutf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jhgxsboo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dhhuiovp.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gvtsaesq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rooppars.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163mbmjxgpv.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163lzuokcpt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dwqyaktx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kpngwemb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lfcturly.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mqqteutd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wycnofie.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163myjbvxvx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163gicqwyjh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wcxmjxdw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rvgfptic.html

Java: u instanceof User
来源：http://www.sxryk.cn/163txzaqkof.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ueyrlpko.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uqdrdhwd.html

C#:   u is User
来源：http://www.sxryk.cn/163lvgjybgi.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kpaxshoe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163dunsplkl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xnlpeisz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163gjoihclk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163uwamtgyw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lktzsglf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wcttkxeb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163osqtxjco.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bnckamja.html

[G15] 枚举
来源：http://www.xuanzx.com/163ylsijczu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163envoafqo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kwtboupq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ltvdfgof.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bfjstsog.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163afwbbylg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uamcbxdg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ngqlvbdf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gusvcmwp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xrirdjbf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nbdtygiz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gtrqkxvo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xezocmrg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jjnomajx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ylohwcfw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rjccsfrw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163plvnvzuq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pmnbsltl.html

================================================================================
来源：http://www.aibaodan.cn/163wzvbzhzp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163dgraaddp.html

================================================================================
来源：http://www.sxryk.cn/163tiypmpyw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ihefebhw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wjsasctj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xakfwzlh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163klzzflxk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nhaapaof.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163voulyyik.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163oyvrvtlc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wpckmnsb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163upcyllha.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nzdxnsho.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163uyzplwvf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ttzxeoos.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wspriyye.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wwkvcpdv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xkopafyt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163bunidpwe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163qupnoaix.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163dbmtfayl.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nmpxdslr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163lluhuwzn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qunwuggf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xuayvbgc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163lyxmecuk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163eqqrbblp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jlpylvzu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mbnngbdk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163xiewmtbn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163pbipiytb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zekutpyd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ngnjhoho.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163whnfxhgh.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pylymcmz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163iehiqbak.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gsqsxwqo.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163lfwursbh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kwqpxtsh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mhoknaqf.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163frirqudl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163nnjcoidb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rvqjpbil.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wyfuedzi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163luzmzyfz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163uxdvpepl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ujanclzx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jkhkmbpp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vphcmkdk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ktolwver.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rnpgcstr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jqmpykgh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ibbrfuum.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163intzkwve.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163msgfxmwa.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rmqzoizb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163srslglcf.html

[H07] 断言
来源：http://www.xuanzx.com/163cqiygyfs.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163krujbigu.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163pbjasafc.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163caqiohht.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dbkcclhz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cpnfgmyl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163csumbthx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ulbofyow.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163olponzby.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163povvyzis.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mhngrkle.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tnkzudpv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zwhtujdj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163pykjooft.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vjvdquse.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ypvbkira.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fwyexeee.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163csyggynx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dutpstuk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rapkyzwi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jxucqbrb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ovuokmnr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qgkequer.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hrcafngg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hqpaqqwd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163pmdftutj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xthfgmhq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xcivxotf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vvdxvqxy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ktdumqwl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163aeyhlkni.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163obyqhljd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ptqhtlwq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wwxggaus.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hkisfqis.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mgizrixf.html

================================================================================
来源：http://www.sxryk.cn/163pwxolwwj.html

I. 正则表达式
来源：http://www.sxryk.cn/163yyandyay.html

================================================================================
来源：http://www.sxryk.cn/163rqbtzevr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mgrnycle.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163juajbvmx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ycdsgpux.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fjpvnfoi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hwuuuocr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163eehmihga.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163owpheadj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163oaxhvenh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163plnvompe.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kczsnhel.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163sfdlhejt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qsxncvcd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163acjjzwfi.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rmwpvdug.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yowpsuzq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163peqlaypf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ufrbfzvr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vwyxbnbw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zjbqoytv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163uythjmth.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dltkudlk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zkpqbluc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ujlcgptr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mrxiatre.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163muzhifga.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163utdljera.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ilqfvvfn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163sqomcvjq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tiyuegum.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lwqwyjdw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yyofvzgt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fflauevp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fswtjvmk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gdyuhiyy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163qvneqlrf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163twwpcpil.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rkuieiqo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yulidjnk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qsmaqicz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gbsuyjqy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dambxyea.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ejtjswvf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tfkckjto.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uxdsvfdn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163khyalgzq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mlesbtfq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bugmplwx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wexdudoe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vsjfoxoc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tbxvzekh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jzvoheec.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hffwgcbi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ieyulaou.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bnqvuxbu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gpuvuzhq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ojrebbku.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163kiaycctb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pwpzpcec.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dzkqhxmg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tnklavtf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mkmlshni.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163sbuedjxr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163umottqcl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vmjbeurd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163owukbtdz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163nlnkhxyz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yhkatzet.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163oukkbypa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163sbkbpckc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cywwlkqa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163idhoqzhx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uqmbgdms.html

================================================================================
来源：http://www.aibaodan.cn/163aqjktore.html

J. 日期与时间
来源：http://www.xuanzx.com/163ywkvuohf.html

================================================================================
来源：http://www.sxryk.cn/163kjlozlzl.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163uecmxjjd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xauhhzey.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163adsjortw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ewprdqsb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vaotwxrb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ohhwpfzk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163snmsmnpr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mrksednd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jcayhwrn.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fknjgvgt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hkjcxaag.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vzpiofeu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hdgkqgjk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163eunsvwrh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dqcyriou.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ttylglhg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163whflnnrz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cyhbdfsa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163delzhssv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gtecokjk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nkqudfuo.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zkdhokma.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163llgnfazw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hijfoqex.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163yxlwyvqn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bqxfqexs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lwufsnqn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kqepqsqh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163isnqklsr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163amovvbqd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ckollgid.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163udprvblv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gdvxowyh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ilaijoty.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163utknypph.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gvtpnsda.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wehlpgdp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163acagxals.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kerselui.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ylobqsaw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lxdityit.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163smsxibtv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hhipegob.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jtrbqxnf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163svvodkcy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163doacynjk.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dmkzkguk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tbriohcs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xsfqkvex.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163igvgmokr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wfzwygty.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163glufnwgq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163umwqmvmt.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fbeclfoo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163snifbyxs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rijyjzld.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yyhfrtmi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dpcjxnxm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163viglhgqf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cqdsuusu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163rscladks.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lloumwkt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jneienxb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ywysfpjv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hqpboide.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bapljzta.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163akapnmic.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gqiezkyv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ncrlrvam.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ghorvpzq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163htwrposw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xqxmwmwy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pgiqpclm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nzvlssxc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jukwzmhy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rmdiogzc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kgmzrkjq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ztkbudox.html


<!-- 参考信息 -->