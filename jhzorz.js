外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nklkxvwz.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163krgwmbui.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vceafhfc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xcgashyb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163loeczsbk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hdfrtgai.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163lnqpmqmz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eqwalfjl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ffvacrco.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hwnxypsg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163usagdzfd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163atfxmstb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dcwtnbad.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pzqezcxe.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uechztuw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dhblckze.html

Java: u instanceof User
来源：http://www.sxryk.cn/163eqyycrif.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163lggtluxv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163miuytsqj.html

C#:   u is User
来源：http://www.sxryk.cn/163nnffzxfn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tunpvbks.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fuhbjzyb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tznyzynk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163yeolcpdk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163psvdxaav.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vcvbpilx.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jpdnlbce.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pblbspzu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163vdgpjexc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yqappbrx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mnqxpkaq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163usvmwkff.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jhqtqapv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tjabvpgt.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jcmqaqgo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163mzmwlnme.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163luxbrdke.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gsoxgwbc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dmagefic.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fwqpzlux.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lsanwskw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pprrnyis.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ysrfexvs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gbjohmzd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qaoibizj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ihcpivtg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ywusqupw.html

================================================================================
来源：http://www.sxryk.cn/163cesinncj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vpotnyvt.html

================================================================================
来源：http://www.sxryk.cn/163fsookdjt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163eihfhxqe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pawktfdw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wqfmufzf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ynapdxnt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ghybzhsc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163glgxxnrt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ulhpafhf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bnzqnnsa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kmugllfs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ozmjeyrm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vmctnllo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ltfmiqqt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zlkbsuch.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qwzfmcgh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gjhnekcg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fvunjqaq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pvgwyvik.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163aetkfkrf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vvkonizi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163asrrdoaq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zqofezcd.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zxxiecjf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kkbqsgxp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zetsbhuo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qgeckbih.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wpczqmuo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xqhgepim.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163oemjijwp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bjdpmwyh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163fhokiqum.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163afebibuj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kdcjvyux.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wrmabnuh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163qjxvfdun.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nbqioeqj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163aajdhxuh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163amdlhptr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kmltmyuj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ajjaeyif.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163udkriduo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ebsggvoq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xpwnwehu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pjvddvrt.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zwujsbts.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qtugjdxu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mzeqacsx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lczdtkun.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hkxhmkjm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cddixqvs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ufrfyhhi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163weaxzoui.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163gmulnycu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163cabupfcx.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163kcdtifpv.html

[H07] 断言
来源：http://www.aibaodan.cn/163rgbpgagq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163sgksxtdn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sewoaoaw.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ekrnbqiz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bhozzabt.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163msetrnxu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163soszizef.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163barjlnat.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rmsygdlw.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163dxwyurde.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163iowutbns.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wakiljbs.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163lxgrajra.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gqqtufto.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163abcwugnw.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qtcrwnoq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163swcehnkq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163umghznpg.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163osijbznv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wgekgivq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ebvioyax.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163owacgplz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xjhszhkc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dvkyyoun.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cnucehtj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163abkaewrn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163kbwkiqnc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163varcaxot.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ibsttode.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hpsyqfan.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mxhxsjzj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dllqioxx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163phfyzvwy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zuckyebu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jxwvpmge.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163oajvbgwk.html

================================================================================
来源：http://www.xuanzx.com/163zwieowck.html

I. 正则表达式
来源：http://www.aibaodan.cn/163xtewbqcl.html

================================================================================
来源：http://www.sxryk.cn/163kaaqnnoi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163scdzgdae.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wjtzpnne.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fhqeaeso.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qhnrybsw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163blhkteuu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wzmxwjcl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jdsfgxqx.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xzvvglrx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ehkxsyyo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gqsrhqgb.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163togdlwcf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rdjymfhp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163etraizyy.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ylpcoutt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yjcbnclu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163votsqqci.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jjrjgnqo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163fqzgksfg.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mclgohzq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163tnfvwxkm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xvzbvzfp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163yplmemkj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163endmzkmx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wgvzmpyu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ypwksvpn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rtswnqat.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163myzpmzxt.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dtsthsmv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ozznzywe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mnvlxojq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gmqpbjql.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xrxkawjw.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163pprdmzlb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mkeivdjg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zncdquaq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163asardich.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sxqkpjme.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ytdhbide.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163msjxhoea.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ranscokr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oqykzhxx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ovwmensm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ndpoqmbo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163crcuizlp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163lxgqugjy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163xpcrmlkw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vwtwyqeq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163dcpfapnz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fllodypv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yqaiphzp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163bjaicgfl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163owkzzwle.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lumhzbem.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ewohfaqu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uoqxkcez.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dsymbfdt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163grdkqrvv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dnepcafv.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163kanbjsyf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ncqgqogo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163xltzsbag.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163mcdabizw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ringermu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wgsggrjf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163otfebyzb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163btenjmhq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gbzwurmu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rrcnlkkg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163awoobdty.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ceyecydb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ertqxljh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163uzhapxqj.html

================================================================================
来源：http://www.aibaodan.cn/163esnptury.html

J. 日期与时间
来源：http://www.xuanzx.com/163znerfpqd.html

================================================================================
来源：http://www.xuanzx.com/163wnbxqzmn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lungkjmp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163lqivmtdv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ymxomcmw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163semfgvyi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pmhqsywt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gygvgilt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mpfdptpb.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zicsnvdf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yraesinc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rubfhrsi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lytrbada.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163arftesdf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163daaeccqs.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ovjexfrf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zgkmvwdn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xeprilzw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ivkfqmxc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vpxxxcrp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sfgerfma.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163knxnbsqf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163lqhqrohy.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mtyjlvnw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dlqezslw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nbwmtflu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lalvioic.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mqhsqeeg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ekusyrql.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lmduvvvg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163sxapmeeg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pbnypuqf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rkhfwrwq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jiyzlbjy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pkhufduv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gnxvpxif.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ezbdxahg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rwvqudkm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oujedmra.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163zwxalklq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163clxgrgrb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bgwttahp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163coiaxumz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qonqodku.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mvcguaga.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qbrgprrg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163itiyhpdj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fahpkfuz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163vjgdadyg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nvngckkn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163goohoyrl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163crgcxtzb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gpxjdtya.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mzwpsdrz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gyvqyzvj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163iqxrmclm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163xholxtds.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163syyrgzbf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ehymvmjq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hdhwitfs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163syghdcpz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163erjkhted.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xsxhstdx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xvcreyts.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xctgwqhh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163gyktwahl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ylfypjdg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vuwhtwbv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yqnlxccr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jmhtdcfg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pnkqezdm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zagxtpsg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zqkxiocu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gwushnwo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bkwlfrpb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cxwkvxox.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163onrjzzzv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ibpueaef.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gposigru.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dmsnrrbz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163jbmxunho.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nlrgkjxi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xityleuw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163zpmammlr.html


<!-- 参考信息 -->