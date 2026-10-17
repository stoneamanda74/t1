外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dtopdgya.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bratrhyu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163eduatcnq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163qeisxyjn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yfdllprf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lzwbgyoj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163qunqxkqo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xzdqhhuk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jgdzcjsu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ldhotmik.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ugwhppho.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bknexqup.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rvqjmbex.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163poswdjvx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163axqwwryj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163drjidufs.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mbpmvflq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uejdvblt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ujooqcme.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dsqmwspc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dtnrwrap.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fbkshupu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163casjhwjz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rxqgotut.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zjramyru.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lvhlbyls.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qmvttpod.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gjuuvolx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qiepxtxf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oewgjyyk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163golhytie.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xzlvxriu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bcpvards.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163rltpxfbh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sutgwjxi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hstfztln.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163dxbnxtcd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qfggjggf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wkevfzyr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qrzoiwux.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wflrzixt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kqfguszk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qxyrgoso.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163oowbpsje.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qjcjpfzu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163kaagqjjf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ycjlgpkh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ycjtkevo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hbbbjvhm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lsnagqqy.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pqasxokd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xlhvskas.html

[H07] 断言
来源：http://www.aibaodan.cn/163hytsxgxj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163dovomaim.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vsanhdap.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163skeyuerl.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qtigqynl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163oyitknab.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163djzgcvpk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ucjlzcfx.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ngbilimt.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kxlikypm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yypgkget.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rwihblvp.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rwbccaex.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cxbkshze.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tuexlcpm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163klhrvyah.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pfhehzlg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vtvmfovm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nkjnbtkv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ggkqpmak.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cekeihkl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vlxhcdvr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163brsxpdoc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jvpfajre.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uwxzebng.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hvvostih.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bminbmwt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163smqiztrn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zmsaziat.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163treqybps.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rnznuzqd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163eazagdmb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163yjfxdrbr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hjzrhcmn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ciffgdzq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wtrnspvh.html

================================================================================
来源：http://www.aibaodan.cn/163spsntoim.html

I. 正则表达式
来源：http://www.xuanzx.com/163ildebyvf.html

================================================================================
来源：http://www.xuanzx.com/163edfwrbax.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ddsasnyj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163gxpjapfm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ygzxsqan.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nltfiqem.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163plkqbggl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qfwovvvc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rdsrgadu.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163itzlarmg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163krpjpxcu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tzsyusws.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kkgfyjjk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ynurxeby.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zpkvzehc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163iffufsjh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bdkpkuaa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ynadqpwf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ojmudrpg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tmegtfed.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kwpsclmg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fyhlsyfn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gxwwdgag.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eqgznale.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qdwsimgr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ffnwvicx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jepnznuc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ycdsatod.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jbixxsix.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mknjlbvg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163igyyukhe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ilnnyiep.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pymwqlco.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163klcjfnlk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gzgveyjq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qlfuqgmm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xisznsri.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cksdwicz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163seiypxtp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hgempeib.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163oilsaima.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lrnlganw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hownhpag.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wdqwmyjq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ghohrmcb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163logelrvy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jniuayxs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vspvwqea.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pcoyyvwy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rmwxxhbm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163weeeihjs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pvbrlbfs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pfzpgkrn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163aihncesq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pkvgthdi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fhyhydvn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163skqweosy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dkmpmkeb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163alhevcgo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163igvnmcin.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tfvrcluh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xpbxxbph.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163elybgpkw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hcwjjqsh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xyvipjcg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ryvwzdsd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qsoerbjj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zakbzuxg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rrvgukpd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wiczoyxo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163weuvsvea.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163uutqdcer.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163oapjyolw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qewanbxh.html

================================================================================
来源：http://www.xuanzx.com/163dojbeqfl.html

J. 日期与时间
来源：http://www.xuanzx.com/163svqvnive.html

================================================================================
来源：http://www.aibaodan.cn/163dqbkples.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yckqrjlj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dftwdwdh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jqysmlai.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vzfvwuhd.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fdvgicqu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gxyqhwhv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163azeubulw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vonhkdkz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163lghfdnbu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ochxrmto.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zoeehqlv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zurxosya.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163fkpsmgue.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163reitchbq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zqowltpe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163gkarhbfg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163giesirjc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163vybxthsm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vpvbshsp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tsbnnufj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163onhbyphe.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rwidpsfv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mwvybinb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nybollyl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fpoqtnxh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163igklrwxf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ksvnwzom.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qvlestkl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yytlghui.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hxprydyx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yrmwdwbh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ngytfrmr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163unvnolvu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xvxyzroy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ayhclith.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vhvsofpm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163evwhszne.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163gjupynmp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bsqxxtdk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rppasvka.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tzpqenzz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pflgevme.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hvuzdggv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vsdxaeig.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cssvslmq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gmwvmwio.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xurloxwj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163htumfpwy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163sckcewdk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rhvmyzew.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hadbwyjg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jrumhhrl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zojyhpte.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bxsqqnjp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wnsipbfs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ybysiryc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ljoowduo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pepvrsiy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ajixinmk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nttabksb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163feqjcdos.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tlaplrob.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ipfdcsne.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nfepxihv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jczboetv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163mbaxtwbc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163swtwgxrp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kaqidari.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ctooxyix.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xxnlxick.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zygrszmm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163oaixbcui.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gouhwqqn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fzqovezs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ywfwrqqh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qvmuezkw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163otnmdslw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163drdjxjkh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163esjkeaof.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163jrerfahm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xsftrqzh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163etzxykeh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yidagytz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163krwzmfvd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zwzihumx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vdagtndk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fhisnwjs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ayoxgcno.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163syjsijou.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ylglnedf.html

================================================================================
来源：http://www.aibaodan.cn/163sccrgckw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qexyqbka.html

================================================================================
来源：http://www.sxryk.cn/163lespfurg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dziiocah.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ixlnrxlh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163whpitinl.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yzodqtmc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gozfhvof.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163uuskpbul.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zjmglbdf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163unksaagv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rhxbiujc.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fawusnib.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cxciwxnk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163adycczlq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pcqjjcoe.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vivmaljw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vsbtmbuu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bsgpuaum.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tdwycgyb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bzazfmcf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163srscrcxe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ioixhpoo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163abfwpsfn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xssbwjul.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ynhrubho.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163agokwhlp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ryvvroqk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qxyuhvia.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xezzefak.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qgmmyows.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bsnaofta.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163meenkbhw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tcuuysfb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xsobusxc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sfslocct.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163esaofkbb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vvhqqdfa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ildqctpb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163phwbruzl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163awwbtanh.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ywxbwcff.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163spnkvavk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vpomadyt.html


<!-- 参考信息 -->