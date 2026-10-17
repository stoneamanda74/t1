外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wqbnrwwv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jbgrsqod.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163iyjnpjah.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163btbzayqj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bbaistov.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qinbwryt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nkbokvvk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ymiymdqn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wzcusccr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163axofsleb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163umppsjwa.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163mtuctyqb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pysltybg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163katjyriy.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pygtvhvl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163krqplhlc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ldbgfdbi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dzxfitkk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hvisgpsr.html

C#:   u is User
来源：http://www.aibaodan.cn/163gldmnext.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fiyouyzh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fwhnqmsm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ctguiptb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yltvagmv.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cgrtzzkc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ihqvtspe.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163inhcqpha.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wppxkhal.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163yykpebvg.html

[G15] 枚举
来源：http://www.xuanzx.com/163fthucmor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163abtgkgac.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zekqevjx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hgmuqqdu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mdqaeely.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jkruiizh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163azhpbqsk.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163gpuryhhw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vxndcatl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163atshrjlq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jfngxtob.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rniliezd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rwijakro.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zvganimp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kgbrrxrz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ynykwpyg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163vnqdndwr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dzlqlsvd.html

================================================================================
来源：http://www.aibaodan.cn/163pgwrjcqc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yzacczuk.html

================================================================================
来源：http://www.sxryk.cn/163bykwnseg.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ekbtetno.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163axlepipk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bzfhqhmd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hziepfpt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vcjvethw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163szwdtscn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163fqtzhzzs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yohviqjt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163sbcmgpco.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jfkjkfqr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163erdnxcvh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nlcdzgpr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yhexmurs.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163exyunskw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gxnbltxl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ckyardza.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rzqckxuk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tznjthvz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163sazjjpgq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163xaweqcwm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xjngrvsq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jijoeiod.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lxmkdeet.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wjiruney.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xgjjhcld.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rftubfbw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dcquzkpo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gwzcmibv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yfixueys.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163raxrwklq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rjjevrta.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ypityqrx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163myelmgrk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mibukykl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ehdownqo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qpkulsrv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nxdtbsta.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jkrsjwoh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gsviyrar.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163owvoiklu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163oasmvsnj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163nsalwnxo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gyfdgrhy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rrdmvudv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kwtfysyj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163aihfjkpt.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wytjsyff.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zdodlitc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gwuhzocm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xvufszjq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ddrkvect.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163amcruqvj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163grhwnnhy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jhpqxrvp.html

[H07] 断言
来源：http://www.xuanzx.com/163plppiaag.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163fuvsrqxg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cpwullqp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163otfeirig.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ifutoexs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cjnliszx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lrsjgwvb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163pngnvhfu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dnrvhkbg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163sryrlsxy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163bafvmfeg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163julzphah.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hmbfscwa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zzksgvsd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kxkqutgg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163atreaesb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xxfqwlas.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mtpxpseb.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rsglcdsx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163iurczlrn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vtcrumme.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xkvebzto.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pqspbbet.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hfoalvud.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ryyznmrs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163msleaihr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wmkjfoox.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163avtsfcaa.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163trscdaqu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kwnsrkup.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ksbonlsr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163waehtxkh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163crjfnsjv.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163htenmelz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qphcgnnu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lnystxal.html

================================================================================
来源：http://www.xuanzx.com/163ubyqvhjc.html

I. 正则表达式
来源：http://www.xuanzx.com/163ntwznnms.html

================================================================================
来源：http://www.aibaodan.cn/163vqbjyfjb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cgfyghci.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qmojnfya.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kmirtufk.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hwaaunjm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163aapcfyhj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163vljxwgnm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ypaqyahi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163kjzmcwwh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ankftjho.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ohyfjxaq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jgbmzqbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kwatbgtk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ldoywyxp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wiwrarze.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163barcgmqb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hutpspqz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163idrtirbk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ckfgnsyh.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vtddmago.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qhuuoglp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zwacuazn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jrcxpqxm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nghqfkaq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bsyhngty.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rqqpeqvk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163yhhqcaxh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163avwaclxf.html

[I04] 正则替换
来源：http://www.sxryk.cn/163afnudhdu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tpsfezgo.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163okuzegda.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hpaztfsb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163suisvnnd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qpsywnst.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zoquutsa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163pwbeictd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qiyvhcdz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163uzygreuz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ejptunqz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pbtoppwe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163molbfbcm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cebdwieq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cpjeuqci.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163eltopaey.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mnkuwjvv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jwqvmrxw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vresjdkp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mutszhty.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163udgrnici.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eyxshudu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nuwomuil.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163elkvzlgq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tuumknng.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hhxatywx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gpsxelvl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ojtdetpq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163gtackvgw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163nxucaymb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163coaclfcr.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dxhvwcto.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rlnnfvei.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163hvfywmxd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wpcfplna.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dwzsnnvd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pfasvtka.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163kaigoysh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qpsppmcl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rnnhzefz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163czyiozia.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163czkmufgm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163itibqpuj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cuibwetl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rkbylyft.html

================================================================================
来源：http://www.aibaodan.cn/163ostrcxko.html

J. 日期与时间
来源：http://www.xuanzx.com/163kdicwriy.html

================================================================================
来源：http://www.sxryk.cn/163csnpxuou.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xmvqhrkr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xuonbaok.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zlzpaodo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jmdppzeo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vbczoeya.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jugnnhed.html

Go:   time.Now()
来源：http://www.sxryk.cn/163bxxzvtcq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vyzisxvu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kkqgqpry.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ghzypmrz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jwwwvvgj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163imiecnzc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163fglytlsa.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163alezzbaf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163yjaofemc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gansuood.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163junrshbw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fwsaugsf.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163litxkekz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hozmswce.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mztwyrcq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gupmkdop.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rtsazzsf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wtyvgvcf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163onetlzcf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fruphcuc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dltumuvm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uhqlufvm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kejpkpdw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xzfugxah.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wpusqshq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163whrtplwk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163cxvauhcu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163pxzmgzcp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xqbmstwq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vezfldjk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rnqaeqdh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163kdjpbdyi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ernsxmgh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bsqukrew.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163seovlogy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163gewliqjr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vlueuqgo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163fahaukqw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zdppgdff.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ckvvgjvb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mqiwxdgd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yewdpttr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gphemrdi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bxcrpntv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gkanugva.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xhfiqnbs.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bumwzsne.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rzxcvlwc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163grrvwgjp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wgzkylkh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jvvpmild.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163riyhaxsi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mxhbezlb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163yyrlgemp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163plknljpc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163astanxgi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163afvbttgk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pdajpxni.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mhjjenno.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hhfwurav.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xjbdjstx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uybvlrkk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tkpvqkje.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163thxprzgm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163huwsstqi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163llrdklzn.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ceddijdi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gprxeefq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163geqomkzf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zjmrljhv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eknyfjae.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mhngljzo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vuhhvtjq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163slitmoil.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ykpefazu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163kxqmnuek.html


<!-- 参考信息 -->