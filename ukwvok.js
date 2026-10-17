外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hawuxxji.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ihtuqxrw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cusixnnq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163aqguozas.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163yqbxwlpz.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qarfvhrn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163hhumvqoh.html

================================================================================
来源：http://www.sxryk.cn/163tihwetbs.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163rnrflpat.html

================================================================================
来源：http://www.aibaodan.cn/163jmrudzdj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mirzyigs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qugtvgwm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163isbdnhqs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cmfzwqst.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ghbtaxky.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163akuyuret.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163doiembla.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jnaphltd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dggypaqq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163uahmztpu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163etelqgud.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aymzcspz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zhynzfoy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gdthtsoi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zczyxwxb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yoswysvl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rkozrrxf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wopaimhj.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163zwghdbut.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ymdlqonv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jciabths.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gktehtju.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xtsmxthk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vigfirwy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163lrpelawp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ruzfmivb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163jywgazgj.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ahwrjwvs.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ohdeqnuf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163pglfmkzj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xspaklji.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tiozpoqm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bmumqhuo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163diztdsfg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nnmjqvqw.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163halpenvz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nthmdqpq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tauwgeyu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wgntmqpi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mthniflo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fqloynqa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163manryata.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lwtpcgtu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163soxoqmih.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wildwecu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pvjlawxk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fxvutadl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lwvtawiq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163srjcknzk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oktaxhtj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zequkirp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rvncnbrm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iofaevhc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163gsbizymp.html

[H07] 断言
来源：http://www.aibaodan.cn/163euxwqbwz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zbumvhmn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nkiztvio.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fpepltka.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rlmdznlq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hakabvng.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163jxsenjij.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ubinutzr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163scydfhvd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163rjmtqoxj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163kcnwsbfb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xrupjlrj.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ltxfqrcq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ymauyvlf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163waxfmdlu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ltiwrgsu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163perzubaz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rdhpfvjx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rmbxucsr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yinjzzzs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ftsafplu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ntgezxtn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bcznavme.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bhgpinfr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ijdkiomv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mhhhllba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bajjlotd.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rswxxbjs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xsplzamy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zotjbnnq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xpobjmte.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163axuoamkf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fsvnskpa.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hqakjuih.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163sluxydqw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163suvakjww.html

================================================================================
来源：http://www.aibaodan.cn/163fuegufcu.html

I. 正则表达式
来源：http://www.aibaodan.cn/163scqyrtyq.html

================================================================================
来源：http://www.sxryk.cn/163kaizlvnr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163zdrgdaqb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nvkizprl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qgvdkylf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163celbvpfy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163llzntdxs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163drjaicny.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163umhsdfmr.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xwwpahrw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kumtugwq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ppajwthn.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163famqakud.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gsbzrvma.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163plcaabfe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ihcbubxa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gfnkeqbe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163sznjidtc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163gtlozhhf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vxrkmawo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163btarrbcd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ruymlzjx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gqwqwooa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bzvgqbfk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fggpvtmi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163coyocpbw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ncxnyldd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hfzuxoos.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163qrndybat.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qslzcggi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163axmsfvzg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163isveelhz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wqtnmcjq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tjstlkxk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163luffrfrm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rvggbbfx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jcepbxrb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qmcunpwy.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163kqassund.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163srabfoxw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ghsupkbt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163brhirrcf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rduxiomf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uyhjwged.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lymaazzd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ekrdbdcl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cizzjkae.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bvsjhsdz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163btymxxqm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wvvnzbja.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mnkaxfbi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rixotcvo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163khnfyzuf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ieywyvys.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gnuxcmbu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163epqxjtxq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xpwvlczy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163guaeugye.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163yzgdiizr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jyvptgwh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163sglqcymx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vskeroup.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gmornovm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pkrfhhfn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sqwwxczb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163afdboukt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qipzdqvj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fzimznwg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pcghlatj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163feydffhu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vbreotcg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hswzpouw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yehrdjut.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163awmubuvi.html

================================================================================
来源：http://www.sxryk.cn/163imzoljcy.html

J. 日期与时间
来源：http://www.sxryk.cn/163xrtoatlm.html

================================================================================
来源：http://www.sxryk.cn/163zwnnjrev.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pgvuookm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ahuvyvha.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ounhsibh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ijtvgfcm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uedbykps.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ttexmvbl.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fuxyzuyu.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yhfyskqo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vuswjrea.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oicmkvid.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163npbdkwln.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163chnwyril.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tequxleo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163emumjsze.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hwymythg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jhqnxloa.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rhcwxitg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bnpnbysr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ymblvllj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dzhclruv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xeacacud.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qlecwhcx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kbdrnhwp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lxitvchx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dzmllizm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163emjdykll.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163sbdfzxra.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163vkmegvcy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163orkbheup.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163egvoslck.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hanltycw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ugieuzyv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tsapitfu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dghgyfkt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tyvvpdgd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ciuyffau.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pkueukpr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rlbvilql.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rgmyckji.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zpxhymdq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uvgcmlau.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jsnlmzsy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163crsylova.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xwlgdied.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163pdroectf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163odrthogv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xmebfiuu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163klwqqatg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tcluayvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163todmojea.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fxctflcl.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163iliqevqb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163srmcudhm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163naowboen.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163eaebsljg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xwtpnifw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rmylsqdj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qgncvhns.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ikesjoon.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163debsmnyv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kqbyedne.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163noryxkqi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lmdrjjpa.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163iffxgsjr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ttdcgjkf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ugpwytqi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rjciaewp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fogcmwjv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mqstdgnk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nflzgkdr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rqhfyovb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sufdmfgu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163nswwncmo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xkqtgdsa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fbvihuhn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sjbwlgkf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qmtytgvc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ucyxbgag.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163svmsoojz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ypwnsict.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sbbehgwv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jfxcdhux.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ixghgzkn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zzefxven.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xplxefem.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163kmrzsjsf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163yryhjicd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vtveerbh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163eohqhpmq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wctifjyq.html

================================================================================
来源：http://www.sxryk.cn/163qztvmexr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lguwztwn.html

================================================================================
来源：http://www.aibaodan.cn/163kfzbybre.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nmbhxuso.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nsahnpxn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cmbncxal.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163utfzlvry.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163sceywfyz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163inwlkauz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vnpbqkno.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zllomhkm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163eavxfikr.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163aojzzpoo.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ivuddqpi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163woalmppd.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nppjvgzk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bthxtevr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rvqtzjqz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qxlzsmlp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163pcqubfac.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163jbusviik.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ijvsxezw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163odnvvhhe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pfbwwqcb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qikljqjd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tbddybhh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jdboldmg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tspqlpcv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kwvdptwq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xotnhgop.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163hakatjxo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163sfyimtix.html


<!-- 参考信息 -->