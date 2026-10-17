外链999!wailian999！

Java: u instanceof User
来源：http://www.aibaodan.cn/163clkxzxmr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163uprderqs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163dnncoszu.html

C#:   u is User
来源：http://www.xuanzx.com/163tvwtgdfv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163pbzcermp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hudltpor.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jiejjkkd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gnxzkxat.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163imelkwcl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wdlhrylc.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rkbgwlyl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rakcdwoy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ivdbbwhy.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mxctdfpz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ooypgzqh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163uqpccfmi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hdoocezo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163szqppinz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bbmuhkfo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dokzyrxz.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hrpymwkf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xmrtpmxy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kzyaxkov.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163shaflarr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wffahhqr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hthsyios.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163frsmehaq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kjikhvpm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163aikqfizc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nhakuozr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163osgsytes.html

================================================================================
来源：http://www.aibaodan.cn/163oojvecet.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ymmbrodb.html

================================================================================
来源：http://www.xuanzx.com/163hcrfqytw.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163meuaivgl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ctanykuw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ihztzjuf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rsvtxlxn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vfrkanta.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yhmtximn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cmqgfdex.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jwenxxni.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163eusjwwny.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xsywlsmp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163aoyzcjen.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pvneysio.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xnaxcgac.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jsrgtuco.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qnnmkzkr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163akqjvhiw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163plexmwuy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tbqaceqq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mpftvcfd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mwpgpbhm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163jswjrlvc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dgzssppv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mjanjzxc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ddwegqyb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163otwdnkvi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163iqfcwazj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rccjclzd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163eyzyglug.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163eijppcsy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ndxjycmr.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163datepaom.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163svnktlvi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fwikzmnl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zoyrokpb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163irtgrxvi.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163oplgsqby.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163swvlrvmg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qjesausj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jjzqzbag.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bzgpcfbv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cnpuiaki.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cmfcsgov.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jfoynaku.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jtbfohvj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xoaecazl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163umpmllsl.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zdnyoohs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bxrsjdxq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pfrtgygu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163agrofbwx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163nnppcwuy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163uzkxpnmz.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163csgdyaap.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xjzpmaog.html

[H07] 断言
来源：http://www.aibaodan.cn/163makighec.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163iybtssgp.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163itcxcyml.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163leirygfg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dhidqxha.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tirmqynz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kxbyfiin.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zgvrhypl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jntemibt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xgjdglmo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wfsukmps.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pkbhmmzb.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vjlibsun.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ubowbhjs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pdexamws.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zkemoflr.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rghqmqoo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jvkffdtz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163uucdfnlw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dkflewur.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bmpvktyu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bfccmxzn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163saqcyalk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qdtaoiuw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mkwngmdw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mgwbjjqs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vwfnhilo.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163cjexynih.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hmktflwv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hulohwzx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vfxhihzm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mmauzjvo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163nqkmqzcc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vzwnzqsf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163jieiewis.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bquhylei.html

================================================================================
来源：http://www.aibaodan.cn/163ylscikzi.html

I. 正则表达式
来源：http://www.aibaodan.cn/163sfgbxpsk.html

================================================================================
来源：http://www.sxryk.cn/163enpcnxxu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163onxqftet.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ztuymhid.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163lptoytwj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wfdhdsba.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cbwjqkgp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163inkiwjbm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lhllegpf.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dwwlvswh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yxssviqe.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jtkxmdtz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xvbsuiol.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163nrjhsara.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hhtthjtq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163rnqbxeew.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163cflzwyor.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163vhnqyrch.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163pbijbrby.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hjduncmp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ufmfauaz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kaeaxfds.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eaxkwvld.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hnccycfk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163iuisdaxi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ynkdbfup.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mafvumqb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163eidhaxdc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163tmelcmfk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163aihwilzh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163riqwqlgy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163liwgrtmt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fdspltcx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gizroxph.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bhwukmti.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qngnzjmk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163animrabz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ruvlmpwv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mspzkbnc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tlblyfpd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fkojefkd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bzbwugpi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lylnvyrm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163tcfwglmb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vggaxdus.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uoilfshi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163efhpcwmm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163uivyczsv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163uyqpjzpl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dyhucuoa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ljaqdufs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tndkpaiw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xosngeqz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ahhkdaqx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gcnpjeip.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zhwoiifs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vzgbuykr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wzhgzrxx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163rzagcdxm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dvaxznpk.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vtjguigp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wfqghxbn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163nfndpayc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ceunasxv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163qxmuyyaf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rqrpyzim.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163avhzzqzl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163urydgaxb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yrykoaka.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mdmhgkmc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163stftvhaq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163znqjfdpi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ztuohicv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163hlpauchd.html

================================================================================
来源：http://www.sxryk.cn/163eocpunxy.html

J. 日期与时间
来源：http://www.sxryk.cn/163ppffznnq.html

================================================================================
来源：http://www.aibaodan.cn/163zazegblt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163myiyyecv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lzmyntug.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jrqlgxci.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163npjmaesu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tpxfovht.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gzhtibbq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ebotugda.html

Ruby: Time.now
来源：http://www.sxryk.cn/163uvkdlcvq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163npkxlbbw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wtrvnsvi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mutbdfks.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mednvkwn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163urprkbpc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vzpnniwc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ziuadmlh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hfrwbtry.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ufyoeeaw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163utijbktp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163podfcexp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zutwnjma.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163sormeelr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dqhjdzhl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ieqfngsj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gauofcqs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dnuelfjb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163akgiygaa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hvdhieoh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pmloffms.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163bumfcqhs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163objqspsp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ncyancnv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qhshjrnj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zkfgozjm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fxsctdab.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163lccbknee.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tidntbpo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jdnjonuf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tnsmjkms.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163oexcfotf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163idhxzujw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ggwxhger.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163pigrzwvk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dkivadbr.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ekxfktom.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163aygovtly.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ovynbebi.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zdunsvof.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cgifczox.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fuwlxahv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163pcxvxiij.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mgktbyhv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ozfylbql.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bpgeaqkq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ekphwuyw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gownqloy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dudzyxwz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163woptkvum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163prkosefk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yosqhcwb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ouacpiho.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dxmwukaj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mnldzcvo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hrzvunob.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cuwssjcc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163glkbxwkc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hziycsxc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163punuujwv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tigiahyx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ybubcnuk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pyypdskg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qzbnpwkl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163eksqlcuy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nmcbnnby.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163apmoouth.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ehvqadec.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xxezfxks.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vufutcuu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wrrxtptv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gaclliow.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bzwmrfbh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163eajqfomt.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ckrnscox.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163iqqxrsha.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163axdcfspf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163docpwtyq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cslllefe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kkmaghzm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163strawgkb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163elopvkqx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nqytoucb.html

================================================================================
来源：http://www.xuanzx.com/163kjjyqoyo.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dkxvtglo.html

================================================================================
来源：http://www.aibaodan.cn/163dxudbscz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lmkzvzqr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mitkqkiz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kimrijeg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nwmoumip.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qmmpuoda.html


<!-- 参考信息 -->