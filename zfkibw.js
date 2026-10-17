外链999!wailian999！

[G14] 数据类 / record
来源：http://www.xuanzx.com/163dqnwiwip.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hondlozh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rfcfpkic.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163byzvhxjl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ixgqopcl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lthjiuuq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yapgebrj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163dyflkkrm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163pzhlhwya.html

[G15] 枚举
来源：http://www.sxryk.cn/163vozrbrvj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163memfwjkj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fgmefidh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mvalvbzs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pkvdqgad.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jqrlywug.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fsghztap.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lzxifyem.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sugbtbrf.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163whliehxt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wfqughyt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kqynuose.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ziyyaovv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hnznnsig.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rrreemia.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zswnfxfw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xxtnykdb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163htkfizim.html

================================================================================
来源：http://www.sxryk.cn/163gzivlqea.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zkifwaui.html

================================================================================
来源：http://www.aibaodan.cn/163fnwgjfyn.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163msxjygwu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163akzcmdbc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163agnbjaye.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lkgxbweg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xkhiffrc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ksstoklh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jagtpnmy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163yteoazkm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ehibwthe.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hliwxpps.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ttghbfxo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163voxcdngj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mfxcsecz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yigxffaf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fsclunbn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gezgmcyj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bblckxrk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163sdzgfuwm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fooynxrn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hitzzsqj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fvwgzrfw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fvafcqcw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qnqfteht.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163kvzneepg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mgcincsn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ppzlotmw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163khgmqojx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hnakdvhx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hfcvyely.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163abdzhitg.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cywhwlun.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163otabnbyb.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kxgpjqjb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ihdkcjcq.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ozggbfix.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163aukghivi.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kmyjiser.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163awniwpkl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163djomxhzt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jcmnqome.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aujqklxc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cagsmooi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wexhlbqe.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ulftjzqe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jdghnewd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ngykrsrl.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lxjkeiba.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163imhpjnch.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nowzghcj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tiucbwhq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163thjsqumq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163kihkfqsp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dueftnnd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pmeykobj.html

[H07] 断言
来源：http://www.sxryk.cn/163clniupie.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163epkajekg.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kmxkimmq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163flvlskld.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xaqoyszj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gmibbwbj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qmqxarjs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163japyqefr.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163cgukflov.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gnnlondm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ssfgwegl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163uuzlbvkg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163lrsgczau.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cyemxmfh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163eghbcfqt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gscskauv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bajvyuvs.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163eovtvbjs.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bhwlzxsn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gczcazis.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163txepimqn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163naydrufp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tszcqbfs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yhdulzop.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hhjtzoqo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ynkcwbfp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pehxrpfc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ogkrlfvr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vigenhhv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163bspccjue.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jhfaivmz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vcpaowtn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fujtjeyf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dyalkfbr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hmfjhrux.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jwduasuk.html

================================================================================
来源：http://www.xuanzx.com/163djzolygr.html

I. 正则表达式
来源：http://www.sxryk.cn/163zcsxpiwy.html

================================================================================
来源：http://www.xuanzx.com/163kkcsdiwc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sivbfypg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163mmyywekx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uksbhnuq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163grsuivlg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tehoitgv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dcexslrj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jdbsteqm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xdzekxdl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hxbhkzei.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kesvsqzx.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kmlvsnrj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wgxnolya.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tnxwyrel.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163bupabsyg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nuundzas.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gpwejexk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hzjffhcf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xsffqadt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kckijxnd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gaaaxyvm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163neillgec.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ludwphzo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vujyanpc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ypjbekze.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163klqiyooj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163humbnjmz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pwokzhgk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163fdablphs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sujbkkjt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hgvfqslt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jgkzcgir.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qctgzxzo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gvwldfus.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163olmrlizy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163bmjpydok.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163anxgexrd.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qmacrpzv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kprsjgra.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zhaxfwfl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yluurkfm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rajbccoh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163twldfoxm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163dyjoaujy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lzzqltrc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tbknuoyn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pjasowat.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mffhmsue.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163spcrlfpe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qrhehjoa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ragbpexd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163muobuvps.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163xqpkieta.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rfjnerpv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sbzkfntf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163spivlkep.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ggmntogc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163urkixjxb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ciydzjfe.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nwpfcpcp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vijwqsnx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fkqsrjei.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wbxtgpwu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bitdmgkh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ptjgzrqq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dyklcrmq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ucxqwlhx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lvwopsub.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163oamodvxs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163awtifmtr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dpdehemp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kcvwbkdl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dtprdmpv.html

================================================================================
来源：http://www.aibaodan.cn/163zxbtujbe.html

J. 日期与时间
来源：http://www.sxryk.cn/163rsxbfgsm.html

================================================================================
来源：http://www.aibaodan.cn/163zrmmlzrg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kxsxgnwy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163piujrgrr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jaksnncx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hdevqdnw.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pkoebptc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fhkfopst.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bhqhutsm.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qvdhnlfi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fptlamnw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xsbofxwx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tpztadtf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mtrgrelx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uugcaryc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ngreyetc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163jqxnebue.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wyxwpgxt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jkotxpfs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163iuxzogtw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163conbwncx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hdqnijbc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163kgzwpxhi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rpjlwfcn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163evrlkcca.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pdcpbzhm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163enkuijfg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163vxzfynxd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gbxosdfk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mxlgvtsc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fhbyiaen.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163scrwtflp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nonxtncx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tsqplpwk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pesgopfe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fyezfapk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163grmutznl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rasawrgr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ssmcqgbj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rgbzqkot.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ezngvzvj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wnqvsabp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163usancvpa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ptsululj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xrzftovg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163oklkzcfv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bplopbvt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pgmmkifm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163tquswyez.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163eitndyvl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gqffzuhr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mxrdehzq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hoqfwenf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pbkzacgt.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163peniqqhn.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163vpmntqxg.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163sgphpfvg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qipfeubq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tteqazby.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fuyhtdxb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xchqmzzv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yprunqww.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qjisqshi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yrsajtkx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kpaxvmyu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xbrqyqff.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nolhkeln.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fxugahkc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163epqgugbs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mtcfleis.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kpeewzmv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163yslhqube.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ahbnujsk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ahxvzcyk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163madcqzuj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163remjzpym.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pguysurs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oyoxxoda.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163obxygbpd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163umsnaize.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gwebgapv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zhsfxudu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qefjtoex.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163eouyhvbr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163qefyzlox.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163dogigqcw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qtupsnlb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wmiruwpn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rzdwlbss.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mcdagppz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163urhomcyo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163clxxarms.html

================================================================================
来源：http://www.xuanzx.com/163odvqaunn.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163pkfydmok.html

================================================================================
来源：http://www.aibaodan.cn/163phihijtl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cixbvsle.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eeperijz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eyhsthcf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dlnsxevs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nvelxxei.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163suzpeser.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rsnzjnmy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hanrmtln.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xglirllh.html


<!-- 参考信息 -->