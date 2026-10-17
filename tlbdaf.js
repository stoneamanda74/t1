外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rbgadciv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163achycdtl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163htyfnwnh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163whymqgti.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ghfiuvez.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zszgills.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163lrtqnveq.html

================================================================================
来源：http://www.aibaodan.cn/163vvwcvvke.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lxqsfnoh.html

================================================================================
来源：http://www.sxryk.cn/163xclvsfwo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163jnoaugav.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163oburnxkd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163clwibeup.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zqrrdnva.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163iwxrssna.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xyfhrotd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ftwjzrqv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lqoocwez.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163uyndenzw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ugelyxqd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wyhcgnnv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bqbkvsox.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tlfaurjy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jrjzursn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qfnyonwe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yvzfbvtl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fwuhtjlw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bgpzthpc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zwveqcfs.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163sfupqtks.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pzqdykxj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kbfvjhem.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ufrtjzoz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ljbxnhdw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ljwjrqou.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163aayylily.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sffsqifc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mnopjfiw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163rfxtqepi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zxqqangp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ggdbcwig.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163azjcizdl.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tnvfktno.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163inwbnjds.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tjvtjild.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163vrermkov.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vvjdjaoe.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ffvpghgq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ajspieqv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163etiuweye.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mwekyknw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163oxjgdscq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sbhmipnq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163pmkwjqng.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pucufcrs.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163plmesnpy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jhomoovv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163teyrjsvv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vhwcxvvd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lphnsdfk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ekdvvcxq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163byglcpow.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163yufzctab.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rybthazb.html

[H07] 断言
来源：http://www.xuanzx.com/163zibugvvv.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163utoyfdhm.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163crximxgk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eytbjtoq.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bkddwzil.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xyvhrscx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rkzdhihy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ubpxfgss.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163svwsarnk.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163scwqvuis.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cgjodfnc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lejtpoan.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163hnckldud.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wbcnltgw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ccsumtlm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gxibpsha.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ofvmztzy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163pudcxtgf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kjvdqkck.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kakgvfka.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163texkofck.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jbhbzrsz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ijvtbqwa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xrsqcbvm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163reedhcsc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rmchpjie.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163syllafkr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163celoxcnl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163osyvttdl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mqklogwl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xwfbqulj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vougieav.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jjsdcvyf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gwaxqiub.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vmzxvpqg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163flmjdify.html

================================================================================
来源：http://www.aibaodan.cn/163linmtwvx.html

I. 正则表达式
来源：http://www.xuanzx.com/163ankjwgky.html

================================================================================
来源：http://www.aibaodan.cn/163sengomlw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gwcrxtlq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163blbrodzh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ahdtolei.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163spmvgqis.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163otnqxurp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zixualpt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ghlbriol.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qgwdjopt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gmyidvmr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163esdkqcij.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163drnutttv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163majpkxro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wiokrwil.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pjadyegb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zavcqqnw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xiwpxwjm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163iulbhrpj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rfaxgkmn.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mrhcglao.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wonwnlyq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nohxiddq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iudvudch.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ljaikory.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tyjdhvlw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163oclanlxy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ttgflyxh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vmjtvrbx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qjbpyhep.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xkkctesa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rslpdsoo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163btjuhnpx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163guodatxe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rypecoql.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163yrhigjpw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zefvdgwc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kefivatw.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dudpcgtb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tdtokabz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163kzoqjcon.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xatsprsr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gimubvdq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163plsauist.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nwtxzklr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uydbofst.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dcxfrlhi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163eydipfmj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vykecril.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qjmefytm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rofevkow.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jsquvunu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dgpyzafc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tuhpgelk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dpkhlgvc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163foemyyln.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ngojmtkl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163eugmclcj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kiugvwbt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163adigjlra.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nabdaomn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wgagqmfw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jqidtglx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qrrzwthy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xywfpjiy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bsucyefx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vlefbyhk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gpzmdcmm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sjoppgck.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163unicwmsy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pgjvrycf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zzqjjlwf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163yxqvddfm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bdxstluz.html

================================================================================
来源：http://www.sxryk.cn/163xweygpim.html

J. 日期与时间
来源：http://www.xuanzx.com/163fuwcgsfi.html

================================================================================
来源：http://www.aibaodan.cn/163ldqqxafk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vfbftypv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vjxtfraq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ulmwujby.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lshssmda.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iqzmrslg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mzkvklhk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163cypnlgzc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bjznvzak.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ajkyrfay.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163sqncunxz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ciinixot.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ugvjhdyj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zvmronkc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rzrozrnb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ejzdwqqt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jzaujfuu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163excloglx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dqwwfiob.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163geafgtri.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ebmuvwbq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163fsqehjer.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iragphgh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ehttiqtg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lgfctzdj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jjzyowbw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xjbbmcqc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163gmvmsanc.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163djrcbhup.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ayecjsqs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hvhjspgi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kyftwoph.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163glsobdxt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ghyixjup.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nkqwzvzo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163kzwftuzk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fpqvsjpc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qkqlrgce.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163emwlyhmt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163stigapja.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nvqltgpr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gfuhhfmd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vxeihgnq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vaxciipt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cqgmmjdb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yogimppc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lmjninha.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rpuyuwmq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pxhbelni.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tesrnhil.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163arzxxnnb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163cbrfatjm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ibkabwcn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sdajlxlx.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gifrzkpj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qurhmitq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uxsxahsx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163acsxanes.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rzdtktfz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vfvqffdm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jxgjyatj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163osvryjms.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bvzvlady.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163crzkjgsq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xjutxidl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163qhfukcne.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xrayogle.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163shepcocn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vmbnwkaa.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jttloivu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163wvdgzbig.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lpcsqwlb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ahslohrc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163oofvusrx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ojfqfaew.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163iqssdikr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wivjquax.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dhagmmiq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kjvuddcf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bsaearfg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nsrtfoax.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163blbkimol.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163asrsrjzt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sdytsrwe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yvcxkwru.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lpmbfnts.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tchmhvfk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mkskqeth.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gkpkijyr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qyztwfws.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ttnnohht.html

================================================================================
来源：http://www.xuanzx.com/163wducblbw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kryblhwc.html

================================================================================
来源：http://www.aibaodan.cn/163pyroszmo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fhyudhbw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163acjcedsq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eumsqcmf.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gqvvcind.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pbyfsana.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163khjixmsc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pgmghdxi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yylpgbfv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nimkvxpz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mfbsxqrt.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tjbhxugc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163twcgztae.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163seidriih.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oxehlsza.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zrfojfbz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oahfjuau.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163deqtscuy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vveuwxbl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tlpnbjwt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ilnuroas.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dbnxsvqe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rusuoddj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yoprbuzl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163aesnbztg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163miiqepai.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163joqztphw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yzsilxjh.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163clcphnmc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ypavjfti.html


<!-- 参考信息 -->