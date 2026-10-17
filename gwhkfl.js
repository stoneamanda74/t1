外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163szryrter.html

[G15] 枚举
来源：http://www.xuanzx.com/163cwhjlpbs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zxjjmieu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vnrrkfsk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163klbhpcby.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iljzkpgf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hqycbyol.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fvzosrig.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163txefnulw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ploiulla.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163pyrtuxme.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163eioxkhmi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xecrqgxo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tzrmqxbe.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xpndijkj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163kzajhivh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gukazrvc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163krddnbkr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ihmhnbyb.html

================================================================================
来源：http://www.xuanzx.com/163nabiltdb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163cvrhcgcw.html

================================================================================
来源：http://www.xuanzx.com/163cmywzdkj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163leoatwip.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tbbertkm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163erueunuf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rgeceejt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ovjhbbis.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hbqrlmzp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jrqqxvjj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163dtoahsgc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163odoquqee.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163azfkvatn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fnrizxlq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dhynbpnc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ldcxyfqf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jvtxpzys.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ebqfmvsw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dxcufiww.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163labcttiz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163icpnijba.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ovgnwkpy.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163uehsworg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163aajszodn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vfwmnftx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fjnbllzl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xgcefavk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163boamnikx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tznpdsql.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163natisofm.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wdwhedbm.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kukgnukf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163itturvxf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qfbstvim.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jtlscpjk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xbeetzlm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lxqiaail.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163unpdxcbb.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163djtbyefq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zljxmwuo.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163alrrynnn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163mzkihrmf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uqvxedmf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vzkqcmed.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163syiqclrw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qithzytb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cxnqutxh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wmtbjnll.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dttynhuk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vgaxupxf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hntbxgsv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zgyhjwhg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hozrrjzu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fzjghcli.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tftaybar.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163plzxsgas.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gvehskyl.html

[H07] 断言
来源：http://www.xuanzx.com/163wkxmgxyb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163imhzyesx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qvedpvos.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lddtpctn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163irkmqrbj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dgxqzaio.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wxogihob.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kmepndur.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163axufsqsq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163eukkdhxu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lavqnpry.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cvsqkwsp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dqrjmwya.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rwofaaxl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gcnuwovy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cavudpgb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163hzhxxmrn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163oxdbnruw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uzewsyzr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ablcdeuw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pwyppzdd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163okoxvmkz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163udvdkwph.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pdyaimev.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zgugtngd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bfqoxcaj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zxutabnb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bhngbuej.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163alsgdbrs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ijcftbdh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tmmmxzsa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mvbrpjug.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163eetzvrcl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kwlumhhc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wgfzgvks.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cepymxpr.html

================================================================================
来源：http://www.xuanzx.com/163wjryjkwx.html

I. 正则表达式
来源：http://www.sxryk.cn/163abkpvabf.html

================================================================================
来源：http://www.aibaodan.cn/163wcemyqur.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jlcgauqa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jhwtptxx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163xhuzxtmb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xergxttl.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hfxpvsmf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hoftyyhi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bpxufedi.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163sehjabhg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nuyubpur.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163nmromyoe.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jczfxlnz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ajwnnbrw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qcxmqesp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163etcsrvvk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163enbonncl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mgylgvkg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nkzpstrc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163khxbzqkp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ymuhcodj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jhuokolq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163drjyjfvo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dwwqjrwu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163oinvxxws.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jpcrtjaa.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163kwymsqvf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ckxqszye.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xfobymht.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rwskjvos.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cxxnsiwf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vofktnmm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163knvqqnce.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bwdhabof.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qqazvjjq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rkxwlkym.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lcadvbsm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163phvgtqek.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qaxhdvbk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wblmhinq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gkdlabvy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ggmajldn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ccgbjomn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163homkarhm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163nlwmvjhn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hwyxpfpf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163arumumya.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qdgxmpdt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aojghfbm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rptvtmrt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fmorijgf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kdexvkeu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bjxsnryq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wwobhggt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163gvudsxax.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iyvafxco.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gornbpuv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xapqgkiq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163humwzlsl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jitapiza.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jqqjyqgx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163fvixhuhb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nbvsmich.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rfvspwbf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mwdanquz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hhajroeb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mzntotcn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qmojvzks.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163reeiplat.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ybnrahlr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jtcyqtws.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bhsvskrh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163pwkcltal.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jankbgqj.html

================================================================================
来源：http://www.aibaodan.cn/163hkaylxuj.html

J. 日期与时间
来源：http://www.xuanzx.com/163xjmvyatq.html

================================================================================
来源：http://www.sxryk.cn/163geqyacqv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163tjqlaaxv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163iwlbeoqe.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tkpxrfwb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nllaclje.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163itpksorr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ipmpytuy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lhozrvdo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163cgozosmv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kugnelxq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ewjviair.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dvdpzgkv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ptchtzed.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zrwcciri.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yoahjcox.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163tspststm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xxuxhayf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zzsllfuy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163btmrusln.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lzwipcbj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163apeedumq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zuvzsacf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163teycbhvf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163apiyshnf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jpraqmss.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163npldiwvb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163djxwfypi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163yqwolyjn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fucfvrag.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kxcvvllh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163itsscnfe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163qmzuurka.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wtxqjfqa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ftjwjqnn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163djahdowb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163qytsgwqt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ignpgabn.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163eaythyvl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pojvhrob.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sdixrltq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ildemyqv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nnazbrbq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163umewkvhz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vsdylgrd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zuzzvdte.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mjpyisai.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ocqqabih.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hjuglwlw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163aiwilydk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163llkchiaz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sgrbqalz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pypxqyxo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163qutlyzbp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kvsvicgw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gkkfrxil.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aakzgloo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kjucslrr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vvgakvxl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bljqpkqd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qcqkswje.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ebrggipd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jgwfjkox.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jnkyumct.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ftsowbid.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163diywugqr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163erxdkabu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fsmlxqbx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yftqovjx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jqjbluln.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xfcisgrs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163oqkdyxcq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163xtobrynt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bwrfqyqh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bbvvqlys.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163aybktzba.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rvoezeaa.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163crolspbg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qehvihcy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yqhdpbcm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163apcfbodp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163luliiwyh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163nqjbczkj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dwfxqesd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wuwkdzav.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zxgoqaus.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tifhkexj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zyjqykym.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163cqntqsrd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163aqwohjqs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qxfxcops.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163svzdbabb.html

================================================================================
来源：http://www.aibaodan.cn/163bpbjwvpe.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hvjoccdk.html

================================================================================
来源：http://www.xuanzx.com/163pzxefovw.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163acccoxrr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mbifcove.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pqskpwvo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jxgvuejx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hsegvddx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wrucgfre.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fggandmz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lqoanerl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163lhhofbeo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zjlziocp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xchjucqo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nknlhfrk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ojgnlopa.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ndufatob.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fnjouuma.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163imsiykwi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rzvyrgcy.html


<!-- 参考信息 -->