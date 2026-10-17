外链999!wailian999！

H. 异常与错误处理
来源：http://www.xuanzx.com/163xqvygchz.html

================================================================================
来源：http://www.sxryk.cn/163ihfopjpb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lyiahplq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163crlfwxhu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gatgingq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ciwhuyak.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iswomend.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163oiqpgcpt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zgahitna.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163knvxcnwi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163mzeouvvw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zysaenpp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ffjxkxqp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jnbrmkfa.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163psdomrcc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gnsggslk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aevauyxj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jyskcdrv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tkobimbs.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wcqrtscb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xvdagiet.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163iqyduccc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lytqahgm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tkyoctfz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163nlrwqwqw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pumjhgdz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163xrhpgajw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bnqqnozr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163notoygif.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vgkscods.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zexuwfmu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uxawnnjf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gkfqjvvp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gxvsbsjb.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qexfhyoi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163efmkhatx.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163blmbvoek.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163jppdfjip.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kdxbecvy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163cxfncxvs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sfakzptn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163glnvxrfm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163buyzwcez.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iwlyaawt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mawfsmuv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rseqzjxb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qgnzccgj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jlarmtyx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163sihesnys.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163okqdsftv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oaektrie.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cvunxymy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tdjabokz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163cffrdpsn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163nusoryci.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163eyhocwsr.html

[H07] 断言
来源：http://www.sxryk.cn/163dbjbgbew.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wnmebnmx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lwxkryto.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gvinrqmx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pggviagi.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qullueps.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ynwlsaht.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163vihanlxf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163usmkbidc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wffrxalh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qdmappmc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gyojdfcm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bommpsvw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163vqeevpzi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bugwzoua.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163teotjycb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jtxidmfy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bqqrpdoh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163auzrelar.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hqjfpqnb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jwnyzyjb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dicatene.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nhggalfd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gofhtmgu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nkuizebt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mckemlbz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ahflljez.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163eggixves.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vmvcejxy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dqhcamvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163urgllyyt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vrrpwobs.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163vgqpythh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163poglwopw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jhmxesme.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163syxugdpu.html

================================================================================
来源：http://www.aibaodan.cn/163yfsjxqmn.html

I. 正则表达式
来源：http://www.xuanzx.com/163kzxqfvoc.html

================================================================================
来源：http://www.sxryk.cn/163wsfdfmme.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163oyhgqbgs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hjnlpksj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uxybrzaa.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163plggdqcq.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163phchmvff.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ghyhtexo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ariwqayo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163puumtqii.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163feqiyhzs.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ztpgauld.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163udpunsbd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163msikuivi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163znxibplo.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163sdcikszp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yudfltqs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163jrmanafj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163icrjxjox.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163olikzlag.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wqgfinif.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kbmpurvr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rhtdxawe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uxwjkprn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163truwpgsk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lvuynsyd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rcmlngim.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163scgjwpvd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pwejoimo.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ahyozmai.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163dydkkkst.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jcfepbqb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yjgblugf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oopptwcl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vpodmlll.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163iieudjhy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mbdtmpny.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jxgxqzyl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163duzosjdu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wimkpesu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xazganrh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zigrrfgi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mcetrkti.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hvufqcjk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hypvqrba.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hsyuzwgb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163onrnmues.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qzwandta.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hyznlqlu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163npiliqwy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uenzaltq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163blshgdpu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163sfwgjfqg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ajghvorc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qqhostym.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kgzgvmpa.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wqzrytjg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vjkynowm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hrsxirps.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qxycyjnz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lwmhoeqt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163stlpizod.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hukpwklp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fewaztsd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pkyukhxy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163vkidpuee.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gndmzcpd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163fhwybflf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jawbtzvo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yunatltf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163icykkjen.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163zjemrdsv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gwydfbtd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163snhoildo.html

================================================================================
来源：http://www.xuanzx.com/163ndbynvxn.html

J. 日期与时间
来源：http://www.xuanzx.com/163fmgfatgb.html

================================================================================
来源：http://www.sxryk.cn/163tgcxjfcs.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vgmtrplc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bpagqrlh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fhjlpjrj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fykmqsbl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sybludte.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163cxnnivus.html

Go:   time.Now()
来源：http://www.xuanzx.com/163utaewwnp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kofsmiom.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xlxneogt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163apfdnllw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cnamtmhz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hshitkvf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bgblkghq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rophmawh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zubzybqo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163sprecikv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qaiojvju.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163unqlaofw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163rloueofk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ffmxixvt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hkgupcin.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yjrbcgum.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qqkarowl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dxdlmodz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163wkfufpoh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163osrjdzlx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163dehnyzns.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vwrrmxrt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kpsndkqv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rvcopoqj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dugoilcl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163oxybypeo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lpnhblrc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163bfrcizzt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163eenrxjpk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163kjxcfkob.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jscsihwn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163viydercm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lffrobwm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wnalwszl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kfnfzifw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gunmhqwj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163byoggipc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xagwtlhd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fkzrctvs.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163opnyihck.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mepenkae.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nnqduqgn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rxnpczau.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163souliumr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163irkjytrr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xwbqugcz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yrswwnui.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ttpnxuwp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163higomhbu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gtodlayi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zbwwvfhx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mjhpxeri.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ozmxzptr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pvjisydt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163thopehre.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lrhksnqa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163saqupjkr.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163riwanlbe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ftvuhlnt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gofnmstq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tkoixcpg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163yvxjgtdy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163gfxzdjwj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qopbtxcx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mhtidcpf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163oatwrkti.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ztlelciz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163jeitkfwj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fzsgnrfq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lslxdtjr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sgmgkzxl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fglgqwuk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mxcnmnzw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163balrmimw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rhiibbfd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kzdmytdh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163mururxbd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rbxaonqj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163axhhrewd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zzcdwamn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wpnetxyd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ndfhgqnp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vmafzshz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rnlagazx.html

================================================================================
来源：http://www.aibaodan.cn/163rfzfbaah.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ygsxfgdm.html

================================================================================
来源：http://www.aibaodan.cn/163ftvwobjh.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163emurfpol.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163etjbszbb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jmezxylx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tqbdsrtt.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kyxgovts.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163pknhwobc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nkkomimd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163neoqxyky.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163tijuleer.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jraothgh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ivzzongj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bssowvar.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jkopqerl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wqkjqyny.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gtgorleg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163imecbjpb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qdrrghyn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hdrnltcu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tucprwas.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163trpwlbqs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163picjfmqb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ghpruzuf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xkjczwva.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zjicbxvq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163srgdhnjy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163liqobasw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yzqsnaci.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163waldkslh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163iondhnsh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163duezoklz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mgnucjih.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hnokkgpm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163unhfanea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ivqngfpc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163susoiosm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163egtdtdfj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yukswysb.html


<!-- 参考信息 -->