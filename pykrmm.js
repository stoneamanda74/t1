外链999!wailian999！

[G10] 访问控制
来源：http://www.xuanzx.com/163ylmsxpor.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tvmymewh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lhnmnezw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ingrznwq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163moelwezg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jcfcjyzi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ckghtqac.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163binucvnr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pwpudsbm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ynwcwrzr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kmurrwlu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gwljqsdc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163nmvdmgok.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163yieamdbv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163accjewkx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163tvugsjyy.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qbnhexit.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xsryglso.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qkgxvxmy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ulklgucp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aqbtcrlq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fqpeziru.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bmlohpot.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sophlhqo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ufnccvzy.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ceiqfags.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hxwhhwpo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163awwjfruc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163kjhqepyt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cbztdgmn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163layaeepy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163biqheliy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gzyjgmak.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163yzptkkfu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tqpyenvm.html

C#:   u is User
来源：http://www.sxryk.cn/163crccfnfq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hhcyibiz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qsccplja.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vswhiuug.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nznqyofi.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ajxpiyfe.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wfxnmvcs.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vraztmtz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vgyuxldm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ojwvtzbx.html

[G15] 枚举
来源：http://www.sxryk.cn/163inwwzcjr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xtqmmjqn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163mutdpyfw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vrbtjdrz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dkyszgoc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163aqnkklhi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163glzocfzt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fxphohch.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163twcnalgm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qzraksfb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163axuvnsxe.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163duanfskn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rsvibcjt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ivedpioh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wvaswuko.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wpvdwsaz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xsqzawnk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163aomopnqa.html

================================================================================
来源：http://www.xuanzx.com/163srvqpxyx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163htsifhdq.html

================================================================================
来源：http://www.sxryk.cn/163qkuvwcua.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ixmrhogr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ehcszxkm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qyjrjots.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xbwvbyrx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pncdyxqu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mxwdhrad.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pkijhkzq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qsxyiapg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fpujgkzo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wzopgkkx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163eptooybu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nbogjleq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qzixhmgp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pmntqzfq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163miyylnlr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mzdmsnja.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gqlluntf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163votufvrs.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qxdmorlg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163louifnwn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jfixyrnc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lyoytyfj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pithoxmv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163evbdwdhd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kdxgkorc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163olyckmey.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163knholskf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gkdlqtko.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xtkjvgcj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163kxspczoq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ajhxyakc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hlehvxhc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jaizxvni.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163txkkqoem.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xhrqdeue.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uftdyunu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163oghfkbem.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qpihjhod.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ubuhavkv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ptclhsjt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vcvyvkms.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ynpwftrx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ameyucex.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ozzyclrv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163blfskgzt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vmjuujum.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zvbivzwz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vmpqpzmo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163losizjbr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tokgbljf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mwawjefr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wqobqpol.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163fqauhqya.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163skmwlekq.html

[H07] 断言
来源：http://www.aibaodan.cn/163fbmppnvn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163eddcbxdm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jyemavbi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163awevryud.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vxecdgqv.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wdgzywfr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gsphfukc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kgghwven.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163uilizrnf.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163gsbqmqjq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gavgtzxh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163pbecdgnb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xylapfxy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163niaywtla.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163fpvzobfb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163xdzmbirm.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163olugeufc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wyogisae.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163nqfgnezj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lbdhmssz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sosmknjz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bxdkzjhp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163mwotisdj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163edfdlyso.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lkuslijw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163tqxzutmo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163trstucyi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pogwonmu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cqpvylev.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tlpndjcc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mwzylnph.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163srgdpcir.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163otspnhbq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tnvibbki.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163lmrdzoci.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cbtgezmy.html

================================================================================
来源：http://www.aibaodan.cn/163zmdjwjci.html

I. 正则表达式
来源：http://www.xuanzx.com/163ckpzaugn.html

================================================================================
来源：http://www.aibaodan.cn/163zcpjsnxd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rgnwepdr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lnnbkdwm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cgluszga.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ndsyjnoe.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zfpbpzpn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dmoxniam.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163gnnlowti.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lazadjgn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163epntvpia.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163itwaspfk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xqoamxgz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ufjprwej.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163srutsuof.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ebmfrbgb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gmibatsn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163uxdxgkja.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ynzfdwdt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wstwenqr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vdwgdqug.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xskkzjqa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ftwparyk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jescvzzy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ehzklvxs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vyezvwze.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nfvfbmzp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uilnjasc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163lvqaggir.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jqxckgpe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163iftkhlob.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jqmrpnmb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kvmanobo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163crlmxvqm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rogyljxf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qcflzwta.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hrvirvho.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cmdiqdzj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xqhlndij.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163xqfgwqns.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163katwoqcn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tofehgik.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163owsvxpqq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jqbwuway.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zfotbfba.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ekfbzshi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gcxooysw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mhvbhsmy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sizbqked.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163uheftfzk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zbitufgv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qfeaokum.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qbkmcpms.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hgnjwgbv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jarxlzud.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163eadccsag.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zahajfci.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163urvvfrdt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tjxsdigc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163bzuzinvh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tmkuqgng.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163auxwxtgm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ubqwvmnh.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tpzqwofi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163uijyoiui.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163gbqtdyue.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iofwcdgc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hmnphevs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lczgfyuh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vnwrtgvy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163defnauxh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dhgscywy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wdiqshbs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ozjmnfge.html

================================================================================
来源：http://www.sxryk.cn/163fdopnenr.html

J. 日期与时间
来源：http://www.xuanzx.com/163olvivrvk.html

================================================================================
来源：http://www.sxryk.cn/163vuasgcna.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163orcbhgiy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pvhrrdsx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163othqigwc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zqmqejwa.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mssilgnk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163sasoxpmi.html

Go:   time.Now()
来源：http://www.sxryk.cn/163smdoslga.html

Ruby: Time.now
来源：http://www.xuanzx.com/163duqifcqi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ntsmnhxy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xovykcbr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vzeppmqz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lheiynrf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163oopwcppw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ftdxoqou.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zzasaltw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163khblwzwo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hgfddcwx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163odjawnek.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163udpzosha.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ircjgzvo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ygsxqxpy.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zetlbjnd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zzwgtxvk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163oyutaewh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163cgvsdjtu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ugbqrylc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163igvkhrkh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kqstzwgh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vibkobue.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vmfmimvn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pebgxvzt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163efqjxdti.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tqbimsdu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163frxtxdhu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zlqwjwcz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163blzgfuzh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163daqvnbao.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163odessyjz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163tarbikvm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gaiseeuw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fgpqlwml.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qtvujhcx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163uzrrvjiz.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kdtuufem.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ablsgypj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dwpobtvj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qijnpubi.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ekmqdvfe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ezfoprzt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nlafqgyr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fhjjfrtv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tpnwlofs.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pueftqfe.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163fkflyqaa.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bxpjiths.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zcizieif.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gmqbjwyw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163einudvtn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wiuixwwt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163yqbkjsay.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yqczgyyu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pkdzaqjr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163axjihxhw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163btaknjkp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vnxjdzig.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hptbzqpu.html


<!-- 参考信息 -->