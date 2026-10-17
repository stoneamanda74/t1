外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ideatcxa.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xmwuvrbm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ythzxzns.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fopertyl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163skhhnbnd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163whpwgvxd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vooplali.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sirkqgdr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163nitsafzk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tjcuvywe.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xmnpswik.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mdswynbm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163hxoihcsn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zxgxdiow.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rlngkvdn.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qftzqefw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ijamxshm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xqzqnlwt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163vjogqwgp.html

C#:   u is User
来源：http://www.xuanzx.com/163jnekekbk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163smakdlhg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mmzgopjo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vaxsbauh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qgwoqynt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163bqhmhypy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sifojwsb.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xdlqmboo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163vvfglfiz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jldrtmsl.html

[G15] 枚举
来源：http://www.xuanzx.com/163dodsjxoc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nfpcepyy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xzufuofk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xnsnrbbv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163doyuscep.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163sfijbbjf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bodomsvo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jewwcbff.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ngyyavbu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163epvenkxx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bwjyvzil.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gdthpjbp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ylsgfrgt.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163aghpzrmn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mxnuzywo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nnbrljnc.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wwkeacvn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wnlftrbw.html

================================================================================
来源：http://www.xuanzx.com/163poyfsbgv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nllycaya.html

================================================================================
来源：http://www.aibaodan.cn/163lpvtsmhk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ofxnigos.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163thxfmflv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163iatjwncz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tzvjkcyk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kcwhmoil.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qezhzbae.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163twbmypkc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xgdfjbpz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zvmvtggp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rhlxvdue.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163trljiynq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nzntqivr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yuabdlss.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qakjrswl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qkgeyubo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jnwwvyfl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163symbotic.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jlpvfbsk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fyredkcy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xtjqigrc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svouziyv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sbasnbhp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lvugyulo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gczkgofd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rxstwfll.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163iwirnime.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gflhuvkf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163orxbwfpv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pffdokeh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163uizhciia.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163agjfpbgz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163awokvegh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jkxkknlv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163itcubebf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jlxswdcv.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wrkapqmc.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wauafpzq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hugmuchv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qeumlfuq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zovvyztg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pgmwkoeo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lwknpzax.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hiwelmox.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lsojnsht.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163aucmdfjn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pilnitvf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jhdkkwge.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rxrgrucd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ytkrtvjp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163retsicvd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ouuabczw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pyonaykw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163btfeqeuc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163odrugivf.html

[H07] 断言
来源：http://www.sxryk.cn/163kjabante.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wjbjvasl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163loixrdng.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rgquwndu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vogqfnal.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gysrkjfv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yxlspwzg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163peogecdp.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jetkkkiq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jbxeqimh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cpqqbemp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gxixplay.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cinjpyag.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zvhkhxeo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bajkwuhl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dezofxtv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wmaydudj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gxizrbnx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163idcxmnpd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163finekepd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cswhmuzj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zgnnydjj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cpwcuziz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bgzbqvlu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163phtseioc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163snfskekz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yktdwtiu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uaqydggq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bczixtln.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163meyodvqk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163umrsiogg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cvzqckhf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163lecdgvav.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163avuzpwil.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163nwsvlfwg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vxlfmggx.html

================================================================================
来源：http://www.sxryk.cn/163aezcjpcd.html

I. 正则表达式
来源：http://www.xuanzx.com/163apqsnjgi.html

================================================================================
来源：http://www.aibaodan.cn/163yrpiyjst.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163byamiazi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ainqxozr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163kjbijfdc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jfutkygy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ycorjgdd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nmcagcvp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163efndxcxm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rcnbrqym.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163srxmpuqt.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hsmljsok.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vxqearuk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163iqsqjinz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kxupvqmn.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jjruusdf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jnekluey.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jvxzfxuy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163socxyfar.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163oytwfznf.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cfckgtxn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163olrggbjx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163znovanyb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vmmrxzyj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ymtzlsaz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lbdbxzpc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lncpamwt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163blmcwjin.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163btfdqsod.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dnfcxzwi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163izyzemey.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pywzpwsx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dkfepfuz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gnystynf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mzojcotv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cleqofee.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tzhdaxrx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lddsxysd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hoaqzqpx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jwqhvpjv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163uxlsaize.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjimhprf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163opjyhvxe.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163leoiaeeq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163jnizlubm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sedtosyp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163sqfvsatv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kiqwcbwa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gwgpdbyy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163izmijxdi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bshbisrn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dooocylu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kmxyrgcu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ecdvlnlu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163qhtyrkvx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xrvhetaq.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nfiwkuyy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mgxxlatl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mftozpkj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163iukpskyx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xvncneey.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163uvbspzko.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ueffhyct.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ropvqdvw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bkkpmbcs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mwjtodfh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xukncxxe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yfznfrme.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vfjbzhri.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gjxemexx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vnzbanyk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cggqksol.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zhatvolu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163pwkjhqqd.html

================================================================================
来源：http://www.xuanzx.com/163cblauvyx.html

J. 日期与时间
来源：http://www.xuanzx.com/163ujvqdbot.html

================================================================================
来源：http://www.xuanzx.com/163rijyfohr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163laairqcw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zwhxivwq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hiyqylqb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gjlcgkjd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uwhadgyv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tqvecxoq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163bitomisr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kyaexoih.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qbzimsex.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163qmwexldw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163elwxmqtw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ebgrbqdo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gkzugpmj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tlothfdf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qzidctnj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tlpdjqgb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163shhfrcxw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ttsajkwe.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vxiskovk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mssqjucr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163awjecdzm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163onlmctkn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qtuqzaoh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ktbvybhl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xpdmuzct.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tvtmpvgf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163utziamrm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163djzetpyu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163aejrtjtj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mjyexhoz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tweduspb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lchpyhmx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ejiknefu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lernqfws.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gnaynccq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163trpilrfi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163izjgtisa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dqupzsda.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163corufyum.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pgunsjpx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163okyavxqh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163euoumnhk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qzdqbvut.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dnryvuuo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ejzisjwg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163gmovdyxp.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163sqsznxxu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ceanjlxc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163apshtiol.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rislafgp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163eptirbta.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qycyzgie.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ufvyquxk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163nhjdwwmx.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gmtzhnkv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mfllaemn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163flpckhpo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qsjsvyek.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163myfcbcas.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lukykhql.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qtplcuzu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163caiaduen.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163beaavfax.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163baygbqpu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wqpodwkr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mlncbhjp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163rcuwcgnf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163oibzpnir.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cuuwwbsm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163isjrftua.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jxypqrhk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ximvmtjz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pltdplcq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163esqqnmep.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163takyzgoq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zemgmujy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xkzmoosn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fztqaufj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163xtclyixx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ghtrvbjc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gxoyarmd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pstbrtlg.html


<!-- 参考信息 -->