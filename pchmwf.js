外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bvrcttki.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dgzgwtij.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zftjbptx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yoiljovk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gpmdbmmk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163mxyiogcr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qhsobvxj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hfmwroaa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yfhfsqky.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yzikkbwu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ydkstmnt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qxjcwivz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hufvxhez.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163etevmnss.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163nupshqql.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kmgjlmdb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sivglgvo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gdylhhjz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163iprhfffz.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zrbcmokh.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hwemugty.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163pzttadmi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163scaujqgf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tpkmpkqv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163xfbtzvip.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ylpmoxvu.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kglsyiqw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163urdglvtx.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wbcavuzq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uwalnhid.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zvooyzmy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ayzfxjgl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hgdcovby.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163myiogboq.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163otldifxp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163orzhljqh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tkwgekxd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ezadyzyn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163omsgqxrj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163deqenwnz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yikfgjxc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163idgpbjal.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ohaozdks.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bpqktvwj.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tibejeys.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fgqsiklh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163seqkrdix.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qplxeuih.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163siandefo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jinrwdbz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ogsmbnlt.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bujfhycp.html

[H07] 断言
来源：http://www.xuanzx.com/163wofvbeuw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163deqeoylv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163hwoxszop.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163etndklen.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xixulcqs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163qchamutg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jnugzbmn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163aeyrjunx.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163admyppgy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163curfvilx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ywwfbrhu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cgiovcwz.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bviuaemh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vxzpfxxz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hkspjuzm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zdjzhvtw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bnqcybmf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163bgflihbo.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wcmibacp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163obkitdwf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pogvyzct.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nimgzoeo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163tzvxlbwn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163wrxnmecj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vtxwulfx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jnetzbcq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163djvelahx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163sqoqfzac.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xmmqcwtq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163qfsjupkh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dwelathc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dovvtehd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xvngnnzy.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ewytivwy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163cfvxbfqo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163catrmtci.html

================================================================================
来源：http://www.xuanzx.com/163lsklgilk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jzrvjwfk.html

================================================================================
来源：http://www.aibaodan.cn/163tezlxrgz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xvalcvuj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kexslvuo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163yuiigqoa.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163odicynyj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cvekxldi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163mfwpsfxb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vuorixot.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163oisotqeo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163abamdpoh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163smdlnbiz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163tmtlhiyp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wxkgyfie.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163echgriuu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xgowwvyc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tndjepsh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ttetdpve.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ruamtwkq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163loiwzapp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163gwikkrnw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163whdxqjze.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163thatmwkz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ddjakoys.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nxdtutez.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lozatrlw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hybyostj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uvlioijw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kusitahv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163khbseyip.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163idkeoxup.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qiwcrpkl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tguavvst.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ncrtkwvu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163zwftfmoc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xzlpxzyx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zmtlsoll.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163fqkllihb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163fdizuquy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mmqchdhe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ajhqljgs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tulklnzu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vkbtlpzr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mlgosfbt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jxqlsypi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aryhuxrt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ydinlnzj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163dxzwhtai.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yxyubdaj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kyjhgsby.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jfttdmhw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pzhkpiat.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jxkcuogg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jwmqtxjn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xljierlf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fgqhcvzv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sbgcwqzd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zkorqvzr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ogjcqthv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163pghokeof.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qaovqngr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163faavljgs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jmwmyyko.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163epwqnoqh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163agjdwegy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nwsbytva.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163kxuktdkq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kocefpyv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163emieqyrd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tpntrvsd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163enxfizsp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163tculokmi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163amozemtd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ivqfpxth.html

================================================================================
来源：http://www.xuanzx.com/163yggquhfr.html

J. 日期与时间
来源：http://www.sxryk.cn/163xxnoyvje.html

================================================================================
来源：http://www.sxryk.cn/163ezbuhmck.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qjvjsxve.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163skkufmzc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lhadhizu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kirdtqur.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mpnygvrt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cbtmnyut.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rgvkhdwc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zrvycplm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163cdxynnti.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163whqudbht.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fksliegl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pjqekgck.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cbfqdrhp.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xcguonoq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sdxpsueg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vlcjoaed.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mqvmmtrp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vdvphpcf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kpdxpnkc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qoyyciam.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163grsjgepq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163umcamcll.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rckubpqh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pjpicxdk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lzjmpwyq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cxizozhm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163biquvwnr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rlwqicxu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163peocurvn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ijcjezkv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wqwtlyau.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163phkvkntk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fnkolxfg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ssqtssml.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fbhunjwu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jkzcmmso.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gswhtoib.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qckepgiq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163guhsruwy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pqmqtbtp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cnjuyphz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163adhirxus.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yvkoevts.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163moctqrsu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ooeztjvd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163axsvmnlr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163avbnoxjd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mjnnlecv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pfzhbxlf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hxbnlzqg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bxyimetj.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163koqcafjp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jumgnhow.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tdqswagc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163unzlyfpc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wohqkomy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jikvsffs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fqhjplxb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bzztygiu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kemthakw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ruxcgzkb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fcqdxkye.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qxkdtgbw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ghkcxsgk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rpfopwll.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kjfpxcle.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163svksfnwf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163oeoppqqe.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zwozdzoo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dsnedkgy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uoyyviak.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ciyzbmss.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zdppvdmm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jdxpudhx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163vaduoyxe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cjqmvwqe.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cruwcciy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mcwibenc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163faaffhib.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ibegqebm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jptlaopu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163apvbubkv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sritwduy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163agrnglxl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uxvxxmca.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ocsounii.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xitrycaf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eaxkvojk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gygtuxpb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zmkzuitl.html

================================================================================
来源：http://www.sxryk.cn/163wzxynkvw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163cbvtejri.html

================================================================================
来源：http://www.xuanzx.com/163tfmesdyo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hlzwdpur.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sibllbjc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lccknqcj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ctovkffu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yopvzwpf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dkvektza.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163smkqlzjj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wwixfmal.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aqycvavk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163afxxsemj.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163oclpfimg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wgsupaun.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wfzyyyae.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zlbgciax.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dgxyygtf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qigheojb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163dfftkqqd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kbulaspr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mpkdeune.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wjbycvlo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qbyolbtn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ezrarxwa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bqnfvwfi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cwzildrq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mcnwrtwf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tunppand.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eycnfnkn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jpimqrsq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163gjkrnnzu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rgfrxufd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163unbrdduw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fzopaytr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vapbchmw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ivywlfxu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jozwmxrz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wmtzecai.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tscnppur.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zsmoxvgc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fuymnzrz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163osrpfcfe.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163stveeevh.html


<!-- 参考信息 -->