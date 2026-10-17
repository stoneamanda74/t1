外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163decsgykc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163siwxdier.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fveuwzqi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163huxzsxio.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rzmuoblf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kzicdcnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bdjpllvy.html

================================================================================
来源：http://www.xuanzx.com/163plydqnsm.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yusnfndu.html

================================================================================
来源：http://www.xuanzx.com/163qbyuelvo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163sxjytzcw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zmlyforf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163glnmfgke.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qwtrjmmk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vmlxcoib.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163cfvfbcaw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nuaolptm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163bovdcbkz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lqjjsefn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tiespmsj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kezttfku.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yllaasle.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cdwylljg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ywoyzqei.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kfwhxwsw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tmxkljis.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wpztyoyi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163xcwzlsle.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ofghixwn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nlzwkajb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vqnahcot.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eeskvhre.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xdyemlbl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163aexxvzhx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163isvybytx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rgkqchcj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163frzytuat.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hcpqzmfu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163lmrzhrsn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fxsplxcq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ppnwizqs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163isovabao.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163raybwlat.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163figjgydn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ospltvbu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qfshdftj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fltfdfdh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hjghdvrh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cpcjsscp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dervgtge.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cvqlxxlj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163exlruisn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mxlcmyue.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rmbnlray.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163btpzprnc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163myewfhxr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wjlpryot.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nvcaslmp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ikgwajpy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xkvtdkqz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163hsnjapym.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163arwwjqwy.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163uvpoibxu.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pfvlzgdd.html

[H07] 断言
来源：http://www.sxryk.cn/163shoifedh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ogonijxe.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cvgltfpn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163newrifga.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xgkanbll.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cczikyec.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lrirnojt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bhimrvcl.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gjjhgzqg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uswcgjug.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163eiiymtwy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mezwrffe.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gnnptabm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163alvrcdic.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dxcxbqny.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xenrtdaq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mumzxkpg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vuanrszj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wrzptrab.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hebziuuk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163shacicbv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tnitcqeu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163oungbyuc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163uwujhzlz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rmeyngdr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ptxwcxjd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cmxqshno.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163qxtuvhwo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kypyysws.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fruzptfk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iwfeznlf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nymtrjmz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fsalrkar.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vivymhgg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163erbvkifq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163rcrpfbxm.html

================================================================================
来源：http://www.xuanzx.com/163gnvjneoi.html

I. 正则表达式
来源：http://www.sxryk.cn/163taquqhgp.html

================================================================================
来源：http://www.aibaodan.cn/163zzzisfcx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163rmypkvha.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163tkuloobs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wvjnlqft.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163saempqyo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ykijxcjg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nfykoveb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hateyhac.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163swenosjp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163eseipjzf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vqexkmiz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nkwpcrjk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dxwhycvn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zftmoite.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163hnufaxbw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163lbehtdzb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fqvtdbdz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vsjyxkdb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sdglmbwb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163leajfmyz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dkhffelu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163venlvlrf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rtzujapf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pwspnjrh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kjhlisgo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hmncrhno.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mvqqiyru.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lfkucioo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163zvhukzhn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ggxkkjsi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jmekwaxs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rqlamncw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163mtqucgnm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kmvwisji.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163moksggcn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vijfpzox.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jiuxxylf.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lqayxjex.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163pmsnfyiu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yfxfcppm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ihriuoiv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ohgxgcon.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163uticpapj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163tjvfcapw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jrakwwpt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pclzaluy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qnkxmmkl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xfxzjbay.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163nfcdwpes.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ckpmnfoa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rafcduhq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zkyzpnfe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ajxkhgvx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163iktoqkag.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163eaojnzix.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ncdjiyky.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ruedqiti.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jhtkqmdq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qlppbnyf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ljqvblox.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cjnmajqs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xswhnixz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fkzthagx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163abbmpvfy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ssktumud.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mjhhlyzj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kseraefb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163slwmjuof.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pguegapw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163owsubdba.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eehrxwto.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163oqgpauun.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gqtvykjd.html

================================================================================
来源：http://www.xuanzx.com/163jazdtqem.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fkxlqbyc.html

================================================================================
来源：http://www.sxryk.cn/163cggulfsp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jwitijly.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163moikefmp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163skegifty.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gpjomyog.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xcfqcgjq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vffdszsc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ocylhdyy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kawcdbuf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qpcgoudl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163uddzeeas.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hztxvezl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tevazgxi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rfdxdtdr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ywkuqrxf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hdnccjvw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163uvjaaryl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pepoarjk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jojnfczr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mdogsoch.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zqivusbb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rcivaubx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lxbaywfd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xsltcybu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163yepmibwm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fwskqges.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163janphxdw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163whsbzmsz.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kijvhqdy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nzcaigrf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yakqlhro.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uffsrydc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tbuywufw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hwwsigbq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vaoxsred.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163lrgrssvo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tdcegwhx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163isiuqkru.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uvzzuhet.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vzqkjlyv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163aklmaxpc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163evkekwpb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kjsfiiiz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qbqubnku.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nzwhceyv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163lkpfvgrv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163alkygyvk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ejevxoud.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ptfgibal.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nxoelmot.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qzzxhnze.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163lcfxtruc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163klxvffks.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163njwhxhxe.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gjwzewhp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163icukezxy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mewdkhzd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rgojbnkl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163esiursli.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fdxemkll.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tmaibskj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ayiwkmtr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pamspkqx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zabxpprv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jwtgjctn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wthsldfd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dzpbptbn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fkedohzj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yntpdpox.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rynezayc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163mlmlyqju.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163kzwoptyp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xodnbdna.html

[J09] 时区处理
来源：http://www.xuanzx.com/163euwobtqs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163naolazvc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jvrzvikb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vbabvsci.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163utwpexbr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163efithyvi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ztlrktpb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163luyzccrd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163euipfwqe.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nzxzslrk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xtvczwiv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yzdaiani.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xfejljiu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ybpdheox.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wzkbxemv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uqzjlmfj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bbtgupok.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xdiwphro.html

================================================================================
来源：http://www.sxryk.cn/163aarxmkyl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163wewovhod.html

================================================================================
来源：http://www.sxryk.cn/163arcfqtgw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hvlthhcl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163djfwnfmj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163brtlvtmj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hjycyann.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fhmgvgsj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lauiaarb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163blylhcvi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jmblsfvc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pesfeiwu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lniuzphy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rodjfzmx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wzpekhnh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cpsiarcv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jagcddrf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xxxerved.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dqqswqoc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xcplfujv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cnvurzgm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sihucnll.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jyxgeoen.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163etvjlmin.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163elhhfhmd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hvbaxesm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qqdtoeve.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qvhsszst.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qlczbpkz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rlytlrna.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ueedgetj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163uvevjsgx.html


<!-- 参考信息 -->