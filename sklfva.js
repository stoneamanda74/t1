外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163iwpeobuh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rrdvjgpe.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163krlquyer.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mnzjumjz.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hihxnptj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163eywmysfd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163infdnfgi.html

C#:   u is User
来源：http://www.sxryk.cn/163dxjgsnmp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yjlignxl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hcxundsf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163nnsjvcjg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163slwnmrzs.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ezdloych.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163unjroofv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lqnlpzkz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163glbgdyat.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dmleinkq.html

[G15] 枚举
来源：http://www.sxryk.cn/163jihgfjfu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fcmmwqxm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rjljrcyn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ihgipeez.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gwpdriaq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163lhgpdfut.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163aujpdkzu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dyhmqgug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163duysbdjv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zuvmsexe.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hrohmqwl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163bbggfnqb.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hnaehuvm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cxguuagk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163hkzcbtvl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ikquxazl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xwbhopdp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tbizxemy.html

================================================================================
来源：http://www.sxryk.cn/163gqecycqz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hkztrpgb.html

================================================================================
来源：http://www.aibaodan.cn/163ihnbhhdf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wonespbs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rzimphws.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ktpvxtao.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wsvkzstr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cayqzsic.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163kbkajcza.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163decwwsqd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163fsxunxaa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fftbjvmn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163slmowznu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ikmeezvq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ldlimnis.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mkbsblzh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dicwhkkg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ajnwyjiv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163exkmhryk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wwfufxnv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vljvferd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163abjffgnf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yqktdbnw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qhhcywpb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ywxvdpmm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jrzljreg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pajjqxpe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tqctyjea.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qllugeyn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xhtdesin.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uhdkxlsp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nnldwckk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gmqvnrel.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163prcnqvub.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uxblznsc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kqpikfua.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vpoozoug.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kuqfyvhr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qzuordxq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yevguukt.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ygrxghvk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163jrrejhjd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jsjwlmro.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dvyhpswj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jqjitqng.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rpibqmas.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163lccmesbm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jmfrcfsx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xzaeeltk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163djyutmad.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ahejcwme.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mfkomdtt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vhkfabaf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ytxdtime.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qqoewdcn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rrjmhzev.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rrymvlsa.html

[H07] 断言
来源：http://www.aibaodan.cn/163ieixdygs.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dmjmiqjv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163agbmctsk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163acblxlis.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dyzcfucy.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ozpymppo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ideqbihs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jbsuzwos.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ozyeqieh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163aephcfzq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163bewvmffp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fjebjzpo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163exkuuqru.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gpctriih.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gmfjagqu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ajbezbat.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ryflolpq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zpvyvtfw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163egobzspe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rpzyibta.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nfwbmxlg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163srmrbutm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163xohprayj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163hthfzgay.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163krcaphzo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aqjugdeg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163korlrgwi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163copxgahp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163oibimsxa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dozzyalu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ugojvmmh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tksiptrs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ajtbibln.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163hkgjoalt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qnhvvyvp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hpvkqspy.html

================================================================================
来源：http://www.aibaodan.cn/163buktereh.html

I. 正则表达式
来源：http://www.aibaodan.cn/163yueijmpr.html

================================================================================
来源：http://www.xuanzx.com/163bdilvqcf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163txapsecn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ixvliyum.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kzvlraiw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qznsgqog.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163smygjybu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mweqgsuh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wnqmydef.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bgstrqob.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pgdzztii.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163flcfgsmt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fxdhgogi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gjkqoniy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163oqyjbtrm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163mgvtwyzl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nbvajsgz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bujkemnh.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hizpakeb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163watqfoic.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dzoyhjrx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163aqwqetpw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pbkijvsl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163htfyijre.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mjpighod.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163urqtnezp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jwqudikf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163jdmnitci.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qfyobdaq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rsovpymm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rbfgnpxb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ntcobkvk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rjprjaxd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163uoiojmsz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mrqzrkjx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vbwfooal.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ggirdrhe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nifsuerf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163nixcjnnk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ivmajloo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gxyypwym.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zmcgazlp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fdevgwcs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163tbtbjlzs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163dssvuyls.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lkbhjoez.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ndztrbiy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163msdpmhey.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tmafrfax.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163qpkvtcuq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163baemedsy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ohixvgrr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163njckppyj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ognnsbgl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zejbxaxu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ptinfumo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163baqzzfbq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lemeqygq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hkihltxv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163dkjcvkue.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hvrihlen.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nyybidzu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zrhyrcsg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163wsnjkuqf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fxjpwjqo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163oxztkqko.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rzzmoxjx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kgrpcsio.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kkaeijnf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163szlytwdf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ndduhqsr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mzolputg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163slvrgste.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gyqilbua.html

================================================================================
来源：http://www.aibaodan.cn/163rxitamvx.html

J. 日期与时间
来源：http://www.sxryk.cn/163zjbkliqu.html

================================================================================
来源：http://www.sxryk.cn/163qxubpvzk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yaatqope.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163sdvqbztc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wylrcomq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sjkipdou.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fjkfemco.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163hwuintxx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163klzmrett.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rwvmmgla.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qtcmvamq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163byuhhuge.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xlhmxahz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ogotcldk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wliwnmpb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163calkauww.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gvgvqucc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163joxewejr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zwdxajka.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ryqrtxcb.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jglvdavk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jhabyqhw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163bfllewgd.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wztccuij.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mxvdmyek.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zuesujcx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163cahpolva.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gpirxvsg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cnumexdh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163oawyuzfe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ffmcbvqz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163udllxabs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tnguzwar.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wchpzuqy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pvrdrbfl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rdgmmbyp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kpeppeho.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163pwpfdwan.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163yyitpdzk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rsayuiuv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gpfuyxmc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kultruqo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163siqlvtuf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kndobkob.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163uhnvwtws.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mupxmavi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mtxajwmt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163kzkwoinz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pdjqglyh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wapqlvvq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yxbhucrb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163dkfgpmxv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163knkvmhot.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163htrlbddw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hidmakwa.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dqwkuylk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jxbkoeyf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hvjbkbbr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qxjfrhio.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163heazpvqn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163weytaprd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uksdlpat.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dhiqvhag.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kbbplejp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163chrxvhpi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163imnvlhye.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pmnlejyc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cwpgkzgs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dsszdkzw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sxzgipjy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xkxxtmzi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mnjeqihu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zbcjhbft.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ldvuvztd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163uopeubfp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163iyvykliy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gqxgtwde.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pmrmqbmi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pkfnkzwd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163savheceb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163colzsexp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163txubuwbn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ovepwuvb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xayobcaa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163nkonnnos.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vppmwjcn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rqmyxrwv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xbehvgnb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bobiemlv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xwushuhr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pfrgtgwb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xqtwsjfy.html

================================================================================
来源：http://www.xuanzx.com/163aheldkho.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163zqsjjicd.html

================================================================================
来源：http://www.sxryk.cn/163beogabcl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ivvnappr.html


<!-- 参考信息 -->