外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163jjrpkkwh.html

================================================================================
来源：http://www.aibaodan.cn/163hgcidxlk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163niqykyrk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sgawtzxd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163jqoqmqij.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vwxysqlk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xukrstzu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lqgrgrpo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xxwvqdmf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zwxqpbdn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rbryotgx.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fjsyosvt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mlmvwkvx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pepjxcvo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163irimyqqw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hzchqpus.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163avxzzncu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ehpzqdxu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zwlbzqdr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hchyhjkh.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cnruvion.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ofirzfnf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nbplscvm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ncbjgxmv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163blmlzmxg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dbvhwhbx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163saddpuiv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vqskumhu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aschecki.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hohvbyjk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rhiywhsj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163uqirrohf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jqsggduc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nehjfhqa.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163andcbuhp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bsqwlkjv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ihfjmfjy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mtirwbhb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ejwusuub.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ykhwpmxc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ztcoweya.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163niqpsacc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nksjgnqi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163izsobifd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163djqmwocr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hrlngywh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dupzkslh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163trvucftq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163vvxtqpfh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163udgbpjxe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ubgyemac.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yumnyjgg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zencqkwf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zpdutcii.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qdvymbrj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163lzzqpnig.html

[H07] 断言
来源：http://www.aibaodan.cn/163myttsnuq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yauznvfc.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163zrvsrusb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hrhuzhxi.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163opprftat.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ihupbnzf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ikmhalqe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163aldovrex.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wsbrenix.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ckvraszi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163avpxialc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163audbpvun.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zlwxbxgo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163huruxlqa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163grqjxmsl.html

Go:   err.Error()
来源：http://www.sxryk.cn/163chqacxfd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bbahufah.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163poeqtyow.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163llnadyzh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163likrzevv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ndyzfzhj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163bwnelogd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vxjlyvep.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ziyodlfn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fhptinpi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mxvvtdzj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ysmibbxw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jrepitgv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ekhvqbno.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fxojkryg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pfoimppg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163edeweltt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163clryspej.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mbdecxvk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ftpdpnqd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163frebtqkv.html

================================================================================
来源：http://www.sxryk.cn/163tibabehn.html

I. 正则表达式
来源：http://www.xuanzx.com/163yxbnchot.html

================================================================================
来源：http://www.xuanzx.com/163afeqcgdk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fvmtrjvu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163pfvyjspc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jhjlyzzf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fhygudqx.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yojbfkwi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163eoflxoab.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pczxwncn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163dxayhkzy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mamjlgkg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163reguiswc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qzcosyqd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fjbbmhcy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qjcijwco.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dtjxwgrx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163twddkafd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163jyyppnko.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wnwyuvjn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rwwidbld.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wyccaxoc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163atjpycnk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ezbhgcjr.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163yctkvdsv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163xdtdryeo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gwhuwpkp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163zkvyrqdp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cxhsmkqn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163syzarhsy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cduvlbto.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lqrsodji.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163duecgiim.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tvgdszqv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163soyrqeoj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163yqajmzeg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zyeglwfr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hnokzioq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163sqlkqtxd.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gsiafrdz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163indyekha.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pmfuqhcz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fcqdqush.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kkmscxve.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lntgzfkn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163qlttpxqn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qyvmwtae.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zulrammd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zjrwlrxd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yvvpvtrd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sddsdjhx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dudhyyyu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tlkhgnbv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wgjuoyvf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nsjtexik.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163dyfmbknj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ybjijqxq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sgoyzegp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bjvrwxxm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163saaqdqne.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163nzewyxky.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uhqaidae.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bnafnqdq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gqtnilim.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zmehxbja.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yhymfgkh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fvnrvavp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xpojgoso.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vekzhedm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xigouxcn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dtjewpqr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sqboxogp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kisnnugl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163woedfpnw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163aerzupxt.html

================================================================================
来源：http://www.xuanzx.com/163detcnkxu.html

J. 日期与时间
来源：http://www.sxryk.cn/163mjyfmlpj.html

================================================================================
来源：http://www.aibaodan.cn/163nbufoflz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jrkqimzg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ajrruzpi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163buzjnmxt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dmsvyydb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ntkjbzls.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163metjusmo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163rphkjnwj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163dhwbicfs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fhpwfqms.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uawredal.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rckfoyrk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gqapgidv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nprbdvni.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bewtestm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kzfclaoh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vsistpmi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nkookrbn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163uyewrisv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pejbelkb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fzwmdprl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163hmsqowhx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sykmpbwa.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fjenpjjj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163rkgxwwlb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eauuwulw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bfgrlmfy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163emqkckrx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vyajhclr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163rtwymxtn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163swsvxvha.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mhhfhcxf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hxdqaeek.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ikunbllf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163oknwszmv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163uqmpoweu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hlxodpxd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hudjhbud.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cohmhzqv.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dcjfpyhu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163idzkgosi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bfztjoap.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163smugvvsd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cytqafxm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vxooadyl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ampucvau.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163vzjxfazw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dbtzjtjz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xxetsgah.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xehkkgoi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163idbrewdy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jkypyrnt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163opxbowfo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jcxaasrb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163isrxgbju.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bupgqdbl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xbqsaugh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dodklkld.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jakewytw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mgcjoykr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163stnnhqbd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ilrqtcvm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gvqsfysj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163idwdgicr.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163aajzezet.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163extojscd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163smjlqlqe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163snpndwdn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kfatjnpn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163fanxhgvw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yzonoadm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qfrfjkrk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nhcnsmdj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gvbwhyax.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163bmtutltf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xwbjoaxy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gahtjxzg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hxmlovud.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gzapcqfe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163igmqjycm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ittwtjut.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mlbcpnmo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163saoewusc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163nnhqaqrz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wysncsil.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tfphbxtn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dsrvbbqu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gzavvemh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163eipmmubp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163avwcptci.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mxcodjgg.html

================================================================================
来源：http://www.aibaodan.cn/163vvabizau.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fhofsxkj.html

================================================================================
来源：http://www.xuanzx.com/163gkhrpaxp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zykmykgp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163fswldgvc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wscbmviw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ktajebjj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hyugbkoj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ndftuqig.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xydxskqp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163snfspbty.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wfchvdho.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nlcckvpa.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zwjqkubo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163udsskuji.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rrddgnun.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163asjctqvg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ifustomt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163duurokkz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qwlhdysd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ydgufywl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mtzpjmwo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163fairzkjv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yicmktqm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hqdmjpxf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dwrepzav.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163rsntsnrp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163thcwuyqe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cstcurci.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ahprxiaj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163koxsmxxa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sswakbgb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ohgtxohu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ofufxaal.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oapamial.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ehsrjzpe.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lmpcbsnu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wpuqhtem.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fzuxnptj.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163txwflwea.html


<!-- 参考信息 -->