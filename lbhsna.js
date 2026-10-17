外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163yjdnnzbo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yiuetxki.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wvtlzhxk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nsjibjzd.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ktjcxpkn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ynxtcawo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163icebzkuv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163pidkhcuh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kctjstcn.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ilgtajux.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163lknnzskp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qxzzobly.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163kqaqyzzj.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hifmsuba.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qnxsywxa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163alhvbvdt.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163iwvvhoav.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163fqxceszm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qgzygypp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163qkjyfrna.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163rchqrrvh.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fcxdtbgj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ohmuwswh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163iuuqjbji.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ufkevnhp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bcyglgul.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ujmzyppe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fewyaars.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xinwweao.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163bjtfuvhu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ldifsqfg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qhlddfrd.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cqhipoja.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qdkobhqh.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jyjtyhxw.html

C#:   u is User
来源：http://www.aibaodan.cn/163lkpuzsic.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163njbvoiwg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163joklqcvk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ewbhwwyg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eblhxels.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ofotwwia.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qwmkfmtc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ncfnjiro.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bnhzpoer.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163lnlqlccp.html

[G15] 枚举
来源：http://www.xuanzx.com/163nbnvvige.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lypdprur.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163obqflggc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fupqlsck.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163roupeiwv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163baqroads.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xdpsxotu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163htokelfp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iggfwzrq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163glsnebwq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ewbcgcxm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163upkwxmae.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ncevgnjb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163frtknmjq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ttnbgrmq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163koqhfwve.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163uoqqdgll.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ybswnzsc.html

================================================================================
来源：http://www.sxryk.cn/163ttiozhbf.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mdfmzjny.html

================================================================================
来源：http://www.aibaodan.cn/163uqzblmek.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xnuhukks.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xrtihbfu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yqutggct.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cuutcuxd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ageuztle.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tgnhrreh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rewnaqdw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163obblfpzn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163exarxjvx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163uonzltas.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rnfkcmvz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wvhxyhzh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pcolkfgh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163feebhbsx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163boqmdjcy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ltrrzwhi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fkihfkbv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163laraaqwf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zwrkdult.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hcaxcred.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zjyymxqh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rjrgtsqb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vzrxxypr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pxmiqvwq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ihxkbisv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163voarwnce.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xwbnimuh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jwbbtdwh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wnqeojen.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gqlaqnux.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zllrixsw.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gakxgerz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bqnejtab.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xxsueelj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ihztweer.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qciztutk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yvakmryd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xekeoohn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kankeqsu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vwjwbuvb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163grvsophk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dhscgkpz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qfzmkrjo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gthiwolz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163akstqbom.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bdrupupp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zmqipmjv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nnjpykpb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dfuagvrc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xhmvbtay.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uxasdadx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163amcinnjc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mhelumum.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163evkztsco.html

[H07] 断言
来源：http://www.xuanzx.com/163ipigwils.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163frvnpfau.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163thbedehh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lubmmtka.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oisomraj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ppdrdjps.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cbukqhqd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nbluribh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163tcrzgjro.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163acfrucln.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cmaxuutp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jyumdqxb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163keitsalp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163hkncofbu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163flnrbsrc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ccrdimau.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hmdwzkbj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163pukijbpg.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fvshiwwi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163huaqasji.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tgpeyolr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163iplhzwdv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163sszfqfqk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163duggdjwu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ydzukvpp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ausiewho.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163erjoejrh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nitaliul.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163kkckrrln.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163guxtfnwo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fnkdinup.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163myduyazz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163dsysowtt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tyiaouah.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ulvpeotz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tvhjungj.html

================================================================================
来源：http://www.xuanzx.com/163pmftkomn.html

I. 正则表达式
来源：http://www.sxryk.cn/163lrbtmcme.html

================================================================================
来源：http://www.sxryk.cn/163sbazgxww.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163adwjxlin.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uphobbkd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163bkeaywhf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163erhzpett.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163eokonqfe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mugymkse.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pcgxgpzi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163upcoetra.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ckfujkqx.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163dvgpeogk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163giqrclbc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163uhfaekwh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xqvwbjre.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xwqwjqjk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jpauvtyy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hsnwipiu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163poxkttgy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vvmadjis.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hvpgmabd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163snpqlamo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163znithaxm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dvunshki.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163abjlaoxs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163eahzbmvb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163sziehvxf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163xectzcju.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ihhoifpo.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gybhryil.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163twfukltn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mjwnyxqa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aywlemwt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163flmmblpz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rioriazk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vwusppkq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eelaeeko.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163narwyajh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gphemceu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tumhalap.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hxcpyglo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163porywdbd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mksnbngi.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ynltjrxb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hhwljoyb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vvcrnbcl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qyuilncx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wblsajbk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mcdoivae.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163llqgtnth.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wonfpujq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yuchskmy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jqelqruq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163tqgabdvy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fyajldgh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nvbuohoc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163sfqnkejl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wfcykaee.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163otmcsfhv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zdzfuvct.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gmrvjmas.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wdpprjwp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jvdixvkt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163foyfifjl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qccxahqg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mulzlbid.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pvfnanlg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163urareksg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zhcxqcop.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wcjcddna.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gnmhvtuv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ecjfbkab.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kilhdgfb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163estkxwny.html

================================================================================
来源：http://www.aibaodan.cn/163wkdwadxu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bgkannkf.html

================================================================================
来源：http://www.xuanzx.com/163zqbqhijw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mvwootca.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qucumiau.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jblauakd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yyzqhyub.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163juxvphyp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163eyzmseet.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163spiglfai.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gzglifbg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163sdwcsltx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163slttthkz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wmwzzkqb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bnswtyoy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ecgjmxwu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xbafsymg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mhwpaqzz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qojtxdet.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bamttzob.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uuxwfvco.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163nqkzspew.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mhwhhmtr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163suxkfvdl.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ixwdhgjw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163baazjlqi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tamhvnvb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uztrryov.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mjgiyusv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tekcebmg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hgjxkstd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fspcjgwl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ufwzuows.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ksyozusf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163indlfdru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tresjwcc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zwxdtzsi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bbicfcxj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rjrorahh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kpuwrwhe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163scrmrgfb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uwvzgdbs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tcakiqyd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ngwdlnhq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eoanoorr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fyzliodn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ciilbvot.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lnojleyb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yxmxskdo.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163edlsugae.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ceuhzffp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kbrbfiev.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bhotlsxg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fvjsaakr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nehkhuct.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163smpccsay.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163yhdmppkn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ormyjpji.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xvahnezk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gmzznwaw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kjoliuby.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nrjsmypr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163buebnyet.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163eleiibdp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pcuvehet.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163eblrxbrk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ounhfqxp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mrourdak.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nmzcbpbf.html


<!-- 参考信息 -->