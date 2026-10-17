外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163oirslcws.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163nbppaaek.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hensacjv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wofxjwol.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163edlldvkw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zufsplwg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wredaihi.html

================================================================================
来源：http://www.xuanzx.com/163stfsdelg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pgkxkbcm.html

================================================================================
来源：http://www.xuanzx.com/163zxdnzjls.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163klhmxfmz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dqyikhfx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163saanopny.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qzumuhgr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fmgpgdvl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163xyncbcup.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zidtcbaa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163dlyqlsbe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yuzbcrlk.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163evtxcemi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jdcrqdcy.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gsuxnjzq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163endstdqg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qswhgsns.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mbbloteu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rksfksiu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pmangmuv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rkyzxhmf.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163osgoztee.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mltwxhuc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wquciipe.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163srnrxosd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163odhdmdxr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qbmsiuja.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dwvgsdqg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wfhrgbch.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qgegcmkn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fehxniyb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bvglqkod.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tomasolg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wxqduloc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ukaukbhh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iazdfwvu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163osawhlzu.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hcdmrhdh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163zlryhlfv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wswvfrjm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kkeouudd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163atjvobxv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aueomeeb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163llqvqhag.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nfqvbmbc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163piplfbtt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163erqossqn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jxembbum.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nlpaloue.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163yidvlgiy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zxcnwbyy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gmuuwghh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fwradpyx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uowrzrtg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vetbsmev.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163prqtyqvt.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ecqzsmpj.html

[H07] 断言
来源：http://www.aibaodan.cn/163eljnasvt.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163esimjyra.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163sabvqmqa.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lwjbzply.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hkaveppj.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rfkfuuix.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ilrtubiw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cgblupte.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163exbnvsne.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163aofdjmfk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163wtgqueyk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163utbzycak.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fzsejaml.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163cjeawfqj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qtenurqr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dtlarpxu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163evbuefmq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sylzhgqr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163pngsbqpx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163zvlspzqe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163djnbyoha.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163quwesudj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zbtvljas.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zbenqzaf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163efhffcey.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hpdouvan.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qjhmkjir.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pgrfaqzr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nutdvglw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ibvhpgvt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uaemuvek.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nsclpvck.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xrxyvdyk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dyhdzfoo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mrndbtar.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tlcedpmp.html

================================================================================
来源：http://www.aibaodan.cn/163pqubybfv.html

I. 正则表达式
来源：http://www.xuanzx.com/163txxfhdqc.html

================================================================================
来源：http://www.xuanzx.com/163hhqvuqbt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hkltuevs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ruyfscyc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uvedhply.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fkhxmnta.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ndyffdcg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dqodzqfe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163blnequgw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163llltkiqc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fzpxzjes.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cvlbddeq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hjozaebc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gjpppteb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hvflpytg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gqghgqow.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qskvnytq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gnskpvum.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163owyalgln.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163scppeqxs.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wdnbnzhq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bzscrerl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ofqvdyob.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xdrupwsr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163npwipimr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fuoeukgo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zbcykclu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163shwvgkxt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ddtvgtad.html

[I04] 正则替换
来源：http://www.sxryk.cn/163yazrqqrz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nidcieku.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ovpaahce.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qykedwju.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163koqvfrpb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163safivyly.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rflzbeel.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163iqzhwoib.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163crnsslkh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ocjgemoz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dvzmjzrm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163osokyxqy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ufsyibby.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hhsspyli.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xckxivin.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163uozvadpa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wqrckxka.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jfesnwfx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163onxkpkcv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tfixhljt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zxefssvm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hmlbkiub.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eayltska.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xyalwtui.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mosbgtpa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wlmbchcz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zjhjiacv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163isidbvhr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163urjhdwzb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163afhoawyx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mfjnsybg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rgxeaswb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163umkbbpnl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qdknwtvo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zumuatnp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lmwmpnun.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gkrrmxeu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mpeokmbj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mbiljoxi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kqamlvyi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zebptslt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163okjdmgjm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pktiwfha.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qvgrnirz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163buwxrxqi.html

================================================================================
来源：http://www.xuanzx.com/163okehifmd.html

J. 日期与时间
来源：http://www.xuanzx.com/163xvkvqyee.html

================================================================================
来源：http://www.sxryk.cn/163ckjzdkle.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ghrlifgz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163iraktkof.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163csexkkmz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163naaqagjm.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163upxpnkfl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163edhpohza.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sjgogukv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vfpdokxz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lmjefrzg.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bbnkkddw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qpsdfjvs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hqnypdhc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163undxlpzl.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hrjpajuc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xaihamwx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163aqqeafil.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jnchypzc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pdhovjgg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qfljdzxf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qjybyycg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163lwcklubx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dqxrvrti.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tghuqojl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163iuevliou.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ahpavtdr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oylxclre.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wudibodt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163iksmtbnx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tarskmkq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vrzplyef.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fopetgld.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163szspjury.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qmltuyhc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ilwpyjpx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jzjldrsf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163otbxrjxr.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fveuddpj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163igmfyrai.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ooesozpd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vyuuplvi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wjtgsdln.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163aargkncg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wotmweco.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nwxutpih.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pzinbyex.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nijkxekc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163emxxarpc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vlcdwiuw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yjamapdr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163acyzzltv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xloviunw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iwcsgzgu.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ihvzoshr.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ijpvxncs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mtdqthfb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gjdoujvx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qhgkgyum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tdqcdrzw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ridmujoa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ffgurken.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163mmytixmr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mdnbjevg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163paoawykm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gzgohluo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gbljfhav.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hwnfyrci.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rezohyic.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jrpgmyjl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fqlsidni.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vrczqbdt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cbmeixsu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ewkvlqma.html

[J09] 时区处理
来源：http://www.sxryk.cn/163yltnsihe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xwkbysxy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zxmbcruv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pbikckqr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yhjwdcjv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163iaoyxkgu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vrrushue.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163phzcquin.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tzowscoi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163lljtjjpn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163clntwsca.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ztrpwyll.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kboqyczz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vudzgynx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rbemxphc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163amglcisx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kdfmuudv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sekzefrp.html

================================================================================
来源：http://www.aibaodan.cn/163dsowzqmj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tqoumeme.html

================================================================================
来源：http://www.aibaodan.cn/163gnsjxjvz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fbaapdfv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163illykpqc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vmakuwjb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nicbrwtd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163epwuzzcq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163skpjfqhc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tafhmbna.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163pfkhkvgr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yveuetuz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fcgnplvt.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hyekyart.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ehehurbk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mvmqgqii.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xyaclspj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xmojjckj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yemklzfe.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vcxffqph.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163bfmxbwnu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hiurlcoy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ojbnkyqm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xnfqqxad.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163szntqdvg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zfedappl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pqoptxod.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kbpbhbjw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hiyzmymp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ogqjypkg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163syoqwzyc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tqzxktud.html


<!-- 参考信息 -->