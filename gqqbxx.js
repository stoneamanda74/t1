外链999!wailian999！

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pailjjfa.html

================================================================================
来源：http://www.xuanzx.com/163yiqcwcut.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163slxaudok.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163axmhccze.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ktazirvs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nqcykhgx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163idfhlcsq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hcolbrvy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mmvasglz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bgbpkwgn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163roacwvbn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wmhgildl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163drmemoau.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zatcbrjz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163weambjqe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163npietdvz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sdfyiupz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qndarzzs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ysolmgkt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wibalxab.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xyiszuob.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dcbdrmup.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lpornpkn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hiterrmt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xhrqolae.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163grzyairh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wfjkosjr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qukxafey.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hvyixcgl.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163urfxvoqe.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ckolkoyw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ddwhxswd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tuvrzfsi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zmwhsahg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163txidayhr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163btotudxs.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uavkdvvj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bhyoxsyt.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qumxcedc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fhpokrzy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rkflulyb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rmyilnhm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163emdcfwnc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163riceqikk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163vnokblwq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jbhvmkuh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vvupddjy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163axpdwdeh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fpjjkrtx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nayormsk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163enpdcggf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iacmwalv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nhizsivg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163noejnbve.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fvycwpsh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163rboapmnm.html

[H07] 断言
来源：http://www.aibaodan.cn/163ktusutdg.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163uzdoosnt.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ghhcjnex.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cqepthaz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qhbyyquu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pdmzoryf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qbzqjffx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zxqfgruk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163trxouqqp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163iitjveyb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pcsodekr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163elzydpca.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qdfbstix.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163oounabde.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yvnxkqln.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gkexdwms.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163djpkjvvl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xlkmaqtf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163sqijxyzu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163uojqirst.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pablmikg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nlczkcpk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qxmcebfb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fsoqewkt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yspnyudj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wmckkblg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163quzwkzst.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xhvmyzrq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nnjeiiqs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yzqzgkdj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nxdwwdmj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bzeqerqa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mksfhieh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163onmmffhq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rzfzalrq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ryhmppgv.html

================================================================================
来源：http://www.xuanzx.com/163nqwwgmjg.html

I. 正则表达式
来源：http://www.sxryk.cn/163zilctobu.html

================================================================================
来源：http://www.sxryk.cn/163zjtefrpt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tzcknunv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dliingsb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163vwlhcltd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163apzjmgpc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sqxccplw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163odtxwhvt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163sohfvnca.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163chfvflpv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ukpekyvf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cvglnrzj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163baywhlha.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nlxekkxb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vikypwau.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163awxslmrx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163xyyshbkn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xrfchcsz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dzlmqloz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163tujgoceq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dmbzetzc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ohlogbpp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pyvdyokl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mbhuxwpn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163suzxlspp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sdoywwgs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tbtgpmts.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ugjmssip.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163gbgxpqvi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163osnzhmdd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zzxxvpoy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ewboxppf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163frpmpbgj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oiavabsb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cemfbzsf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dlqrlnrk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jtymrbna.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jmgfwhkv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163apuizyzc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163fgrnvzht.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cqnmzqsj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uimqddkc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gtaorwoz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uguaaeii.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ehahvmfs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tjnedove.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163emhdjpif.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pugwezad.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nxogyhqw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pkhkqitp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bvztftde.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ezldlmmk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bgdzmysd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ertbxkzc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163avyofvgb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ckuyyaze.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dacbbkcz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mdtlloxk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163boqbidgm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163txybvhwj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163opjsqauc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ksrsflqw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163javahdvi.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ohiugmgl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hcpahdlq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pfgasjgg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hwxbszib.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rhdnskio.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lwpwstih.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eqzsnjqk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163quneabpf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gemkrhut.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rpvbovpn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163arrfgpqn.html

================================================================================
来源：http://www.xuanzx.com/163ivibmcna.html

J. 日期与时间
来源：http://www.aibaodan.cn/163erxmedwq.html

================================================================================
来源：http://www.xuanzx.com/163lakjyhtw.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hnaobukr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fbnmzdnz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jrdhjeev.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hludmsmx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cmuzvuid.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wsansncz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xpnjmgew.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nkcpmnhb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ndwpthxq.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vszrlpiv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lrfmrcbj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mbjsadji.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ziuravbi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ukywgyzt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fuoygnhp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zwzziopb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xmrzyfwu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163eaixhmyi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vjhkbgti.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ethljdyu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163osdagtih.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vjkfjgbh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nlcihmte.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dcaajkpv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ibctjjsw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kywdllnh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mwxskfnh.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rhribvdi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fasefoto.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zryekgtq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cskdbhie.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rsxcmdmg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wgejneax.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hghrxdod.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163badbsafo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163scekygjc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oisnukxm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zggiaysq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xzznncwe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vjytnena.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lwakgurg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163fieaaovc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xiuwuobw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163hcrsrepq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ylfcxrsb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kzcftpnj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mcwztomq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163snjujptp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163chwgelno.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ckouhebc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bjlefaih.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ovddpfxy.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yrklhgzk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nvcmwenx.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163kungvame.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ndtnzbnk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163wmjknmks.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163szbckzsy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xruekqsj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wytpyqzw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qenzfcbp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bssiufhf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pildseah.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163fiexxxda.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ahssaerl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hklpihdm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163enhadtif.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nxhhhbar.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tjluftzw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nyebwnss.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ylkfqugy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qujtadyr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163valflvuq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tigueext.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rqoiqovg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ntuupzvl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ktfncusi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163cgenoqfn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hzmvqobp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rhoudjzh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163pamboshq.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ljysjemc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yeygbejk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163toilocgs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lelqdoor.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xetvsino.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wgjqrjwd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163wsdritxl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mrfhwmwi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qzbgigeu.html

================================================================================
来源：http://www.aibaodan.cn/163kkmaxwrk.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ocjepvyz.html

================================================================================
来源：http://www.sxryk.cn/163wzblgxjg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vtzzzoii.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mlfqugpk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ugfhbztj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163bvbnozvh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qtrcebsu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163uawhcrel.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tgnoldfi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163unegajpl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kwbrdocj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hdxrpvyg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tzljkute.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163lrnpixjc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xneymtal.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zmfyvsgn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yrnphrwt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ceunklje.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163omdxniqw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163shqbnear.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kxwahzeo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163aqnjlqmg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uaxjpvse.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163coqkkhzh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163umpfmwcm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lrhyzorp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gfpqllfg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rzgaoagy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163smbdtver.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mpxjftkh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vgfkxjsf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ybzkczux.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jzshaiin.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bvqjlnxk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bfizlngn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sxvinowk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hydgcsnl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fpzpdxtk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mlirliwf.html


<!-- 参考信息 -->