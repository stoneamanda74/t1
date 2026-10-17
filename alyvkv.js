外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jjlsdhnx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163apcqkfkr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vlkhqzqo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hlllwzbq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gpcznhks.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kugnzlyj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zgijskdp.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hclhdwsm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163oikxdshl.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qbaxnzth.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zevuwdnq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zoiotjln.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rgmlkymh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uaocrbpv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qkhshayo.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cuajdtaz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nrwfuhyb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hwkomdhd.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bybhozcr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163uirhnuww.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kswofral.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hascnonp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fkbtgonr.html

C#:   u is User
来源：http://www.xuanzx.com/163rmkphyxl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ostgslvk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rhhusngo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gupefvyh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163vhdwitls.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qddeaosw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lckqrhss.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ycdwtxdn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fiqlmkct.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sktailqb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163fwaqsvkw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163feaqbhpb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bujczoqh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163iforjtfn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wnjviewx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kwnqvytm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vjajanun.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kinuphzd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rqkdvuwm.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uvlrwtuj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tgvuvnwy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163stxazpzc.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jphjnbgz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fgxfgyvh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tczvkqqr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ogrekrzq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163oqpmoziw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cjeehyis.html

================================================================================
来源：http://www.aibaodan.cn/163zrbdiucz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163itlpetsp.html

================================================================================
来源：http://www.sxryk.cn/163cdutmpgz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163owzbmmge.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wrlsuxut.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163vjoxspjp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wihgncxl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163juprhcir.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163azixcycr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rvozvvfd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tdoxoshq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mdpdrlmq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163owsgljyd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163fvkjktyg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hhqojbaq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jfgswnvk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163htftmumr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163opigfjkk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bxsourgl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163dvozdvdh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zrdhjtrz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pwaqpico.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wmaaomuy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163tkvtbdwy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ianhczfg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163htnmgojt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mcelkvuy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fxnuhhvx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163mplvkrwp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ccnywvbt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xyjhydmx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ozxhzvtv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163odzmkvrs.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yixmslmu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bvpruqnw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163oicnhhdw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163quryesfi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163orywwtdv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163szstaaoo.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vixezlwq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ylcbnfjn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163goknmrdv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163chhncdeb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gbtvwofx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163iccdhwbd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dahxvkcb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nzchcyyw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ilgggkss.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vzddwtxg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hshoplor.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mvinqfhv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163liavsvff.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163zbedrnso.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163cuqooohw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163dnyiwrjj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mtvzylqx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ctxsinff.html

[H07] 断言
来源：http://www.xuanzx.com/163dmxprnlw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hpbmhllo.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163luqweayr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ejytuqjm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mduyvyab.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cgrotswn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163cryrrvai.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lnqthmkm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163smvigyxj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xrpopmqx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163nyuvjjwx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tzpnyqvy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163xfhuslav.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bnmshzyd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163stpgklji.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cwruejim.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163azzdbjwt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nqflcrbf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163tynircmt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fzzihsox.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163temecsfj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ecvqmlhk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bicqangu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bwhrjhso.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dqwxqyjk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mzeuticl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ywrsaols.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wyishova.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jrsxmjme.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nhoexget.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jwaeqsnq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gmudlfut.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hqpkqvfc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gratzzzl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163oxgssfsv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163icjwdapk.html

================================================================================
来源：http://www.xuanzx.com/163fzybrohx.html

I. 正则表达式
来源：http://www.xuanzx.com/163uimwzixs.html

================================================================================
来源：http://www.sxryk.cn/163gznpjdwg.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ivofjwbz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163rufmhdun.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qmkeqzji.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pozzaulv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ppkglbsv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mezddfcu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vwyxfjjr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cmctzxxx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163trwvxdsi.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163agqmwccp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ytkfdcrz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wycmtfqw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bnsizxun.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163asmhsjzc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163obkhfipw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hentvyny.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163epsgvywt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163lmwgsltc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xutwywgb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xngikhyx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dulckulo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163fdjjostp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vuhkxofl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sqxrbfjk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cfnodvgv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163czdjijkf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163thsbhuhk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xbzlmxco.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163wjwtrxpf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ucchssmt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eokihkwn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163unjqzsnw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dbkhgyyi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qydmvktt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mftewlvr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zkocakab.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vwbnyxgj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163utqzfzep.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pesxwkez.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jkrmjplh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eozrsyhx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qcdsdfrv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bptozewd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jzmlsgwu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yjblovih.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163smdfwqaw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ejjhqigb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163toapajyj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163khudnhcr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vcdcijch.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hzjxwmki.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gymdquhm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163chmbvcwq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ayvuircu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163aiseyppl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163voryaqdk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dgbqbice.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163uvcfwctn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163epyeissu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163oxfhpnmv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mjypaxyh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hnowasfg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163klirweeu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ccyeknae.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163bccpiafd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163khzlykmq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163emgrrmsg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cgdamfqc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ibxlkeoz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163oiagrfui.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ucapvfcc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163pfvtecoq.html

================================================================================
来源：http://www.sxryk.cn/163arigofnq.html

J. 日期与时间
来源：http://www.xuanzx.com/163fohirssu.html

================================================================================
来源：http://www.sxryk.cn/163eyryobpe.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tigcsvqv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ghojyqwr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wexmnqbx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kchscdvq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fkgtjlsk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163htudqakz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vaymxkhq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163simzdgkc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163byvjyqdo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163aooenjnc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163codvgumt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xgovjlhy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163eowpxbkb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dhimlows.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163akcjnecb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cysiltyn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163uycltczu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qujezayq.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jncxdqrh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163unanpuyl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163iienhwta.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yvgldmxf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163girutzuj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ayhgjssc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fljjstjc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163qskjbxft.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qghntdfh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lghbyjpc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bghmvtrf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163oadpgqxw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lruuurnm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163matlygxm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ecmzmuis.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qkpzdaqa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163soqwvqax.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ljpelkou.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ddjjelev.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oknnaymp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kcjoedbw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qodmdeok.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163svmlhyjy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163umtkdnfg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tnpqfztn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163fpngxent.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lhmdlicq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nbrpzxso.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nyuxizny.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ssmhtuap.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163bpmjrsta.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163idirovda.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163otrfclsa.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163sandlaxv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ulhytbix.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163skoolrdv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tvtsvhmt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iyuhcnff.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qrqwdiiz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vlqlrqtj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fwnnponq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ofvuevkz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mrzcqdol.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aoykqcai.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qysmjkrk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zwhpggnz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rubzfylj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zaesoobp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163bgczgqsv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163krrinckm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ocageuos.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mnebdbhn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ieodqrmd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qbidcifc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ahvajuyn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fqiuoceu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163irpnunkv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ohklkwqc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ddhupbyy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163huoabllb.html


<!-- 参考信息 -->