外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ogsyyhiq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vzyextis.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lovuiaas.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xqowjztp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dfvyfluh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gglbicma.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dgmsetai.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163tetmzuvm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163taupfdxi.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163geynywjp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qtkwagxe.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vkarmmqt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vhjjadma.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qibqmlhk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ugkymajs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lxazbebp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xwaetzpd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163uhxmhmmo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gtqfiedo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163nmcjiqgt.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dnkqrflu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wzhezljo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mwuyoyql.html

C#:   u is User
来源：http://www.xuanzx.com/163sshhvbec.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163chwramjl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gdqkiomw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163jswskseg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rgaepvqn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mskzxcrl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163abitneax.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vhbpayfk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ylsnllrp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163siuotfgh.html

[G15] 枚举
来源：http://www.xuanzx.com/163eduvvncs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163izckkjvh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yygakfkt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pzxsohxa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mxznqmkm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163adxebwcg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dzizlswg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163aepndbht.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pklpjwhg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ccilavbe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zcxabuxx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cljtpagz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jkowwcqp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yqadmoqk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kvmudnnx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zkkpkywh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wnzkyafb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163hefziumf.html

================================================================================
来源：http://www.aibaodan.cn/163aebcbiud.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fmdpvwbk.html

================================================================================
来源：http://www.xuanzx.com/163qyffjqih.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pzubwgvn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163umqqbksw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hxptecpc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tsxwcicn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pjpolcgt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ywkgynwx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163lwujkate.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fxtkccrk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lxmyywpx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163kkvvhfeo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ijxlufcb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hyzvzcdz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yfizzcwv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163brpyjxcs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jayckewn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xqrmiqfk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tbyvmffb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wjvukrsb.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tupuugiv.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lndrlagb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kcijrdcs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qlrhjadg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mswujllh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163szqgqpar.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hovxricv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163anokwrlo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163apwuvkgm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ngyflhem.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163yzjonzcx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jholqzpg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163febtwugq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bpuxcpge.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zxecdbyo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dxzdserc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163moccvvzt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lmosmogw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163sgimpuei.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ccpzyoqt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fnznlwem.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uwutzxbx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qabvtpzc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lrrmojkv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wsfsolsd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bxuzjpmm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lqczaubz.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zchggxlb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lqxsbuwf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vdfltxwu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dzepduvo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tisavppa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zrqkzgtj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kmhkfpti.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163juxlcivg.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hnoyfjiw.html

[H07] 断言
来源：http://www.aibaodan.cn/163lvpzejki.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163eenqhdug.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kglkjuol.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pdfmfupj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vyokvala.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vizqhudp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ffvxrrzf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wyklherl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lhpdbfnf.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163thpyfpzi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qjlazzob.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kurusvia.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lzqqhigv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jzfljtft.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pjcfqsii.html

Go:   err.Error()
来源：http://www.xuanzx.com/163eutmihcr.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163swcjavif.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lltbutfj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163stianice.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pwdojwfa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163eibufrdb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vgjjoson.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vqvacsmc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tcnajwss.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hhktmpdx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rxyqcvgt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jsjaalbt.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163djqyfebj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vinjgexk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kjicdoui.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ylnpqkvg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kczerzyv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rhqdsmaa.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mjswjbxc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163imihcjrw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qnqzbedh.html

================================================================================
来源：http://www.xuanzx.com/163bwnnvsgg.html

I. 正则表达式
来源：http://www.xuanzx.com/163tmetouzk.html

================================================================================
来源：http://www.sxryk.cn/163bflkewbc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ygcpvxgq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163srwpzdkj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163myrpfpvk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kkaeepvi.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xmjbjabm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163knvgpxqa.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bljwhgsq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163jntxzgfm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163dptuuvxb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yhrdwkdk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jpqgbevk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163izgdctxe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163dxxfechn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163loohqrrn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163brqyytvn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jeyovpvr.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163crllzbzq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ctlhwnht.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163itoifpiq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163yuwnpemd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vnucmvoe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qsubzzjg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vxdpjvqb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gnbhiyyp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163cqwnaidr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wdlbrkkw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xfnlvvhg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163drkkavth.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zzhryfmz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xicrxhuz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ewyebjrk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ewsnzyeu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kimxfmwl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gqdhknmw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dvjwqswd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uplkohoi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dynnxkqs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xpsnijfz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163zbaikqoy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hvfsnttw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qrywhsny.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163fzsiarrf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xbjtseff.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mqtaglfx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jaycowjq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vvbodjsr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163aeipbtph.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dyamdyqp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cohwbdfc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jmtoelcc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163sqxlxses.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vwwtinst.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ockewcxb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zvlrgomz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163plcljaxh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gpoxswqf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zdetgzgv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xldrasxg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yiwihceq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163eepmtzwx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gufapzkf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163arzxwzsu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163potdxcen.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163uuutrfrl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yemzokas.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kfoqcuon.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wfwnourz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qtxknfsd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163oysypaeo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bfklzahq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163emaiiahb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163icmydlgk.html

================================================================================
来源：http://www.aibaodan.cn/163zjbyjsiq.html

J. 日期与时间
来源：http://www.sxryk.cn/163yoconunn.html

================================================================================
来源：http://www.aibaodan.cn/163gvjslrcx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yptsqmxz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dzslgchx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ebmbsfkf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hdbzlcdr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163efsejfes.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xxbqusap.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163igtdqhgc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ysauxjsv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wkiajrjq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hiafzyeh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pxweivxj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lszztzys.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163acpiuxrh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zmmghfyr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rujumypc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163muykkdvc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fturmjhr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bikeyeyz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wfarmgyc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bpsbnjnq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gkctvkqn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163aamsbugq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lfkwmuew.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gvgehrlk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zigvabkw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163avyhllyt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163bkrihdvz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163armmyapy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rpuccidx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163uagdhpay.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jmucywvg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lsqexjlp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163biyyzkmh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kmctxbmf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163alvzslhz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163keyarplg.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ytbufwrl.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jeaebguh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ycglpqza.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hlnduiye.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mrkwnqmx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hjpnmtui.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vhopzvyr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163utwtvmcy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bgjsgqbh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ygdyasbe.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gopaxfmm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mjljvkdx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sfviqdst.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163orppkxvj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qhiuxafj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163guzlodve.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qrvoenbs.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bzbxcmev.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yozzmwry.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163goihoerp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ecldwtsw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163soktofvu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uaqvvsyo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uvhyebsa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cartbqig.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cvvlgoam.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wsodwfst.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163giwpersl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rulwiora.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zpetjybc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aznjuhaf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163abvkxacw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nkankuii.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163kxuztayh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163tljxojbu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163aicpcbil.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lmeqfncg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bkjwseww.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ufzgbnvc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ipvgdrhp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jyrzdafn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jzdxlfip.html


<!-- 参考信息 -->