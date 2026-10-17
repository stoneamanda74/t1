外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wfkmovtj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bagsodui.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163glumqkvk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bcjbwwda.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wsnqizcg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lopfhqhy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kziolxzj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163oxusirdh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mqfxmjap.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nudavxag.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wiomrjvb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iqlkezoh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vwlzvvwh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163jqjlnlwj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163nhinbgvb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163oivjjrrs.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tkjulavc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163uwltiuno.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gujwztsb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ckcqvixq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163thdlbbko.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gdffqfha.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wpunbuwx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163fgddexyf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ufkgamio.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mkfjoivo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163jtxkswit.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163yarzeaoc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163mzbeyblj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hneckpun.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jicmuydz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163sireouxu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nrivbblg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ofrzapgy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pgoqghlj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163vfdvjrbi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qppbyjiq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dglwqvqf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163akxlocoy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ttueanwm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163pnjspwme.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qxzzzysl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nsendwcp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163aycmxzop.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hmpvokrb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163duuokafu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zxmaurky.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pasajojb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163gdojfbnl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163nhwngsry.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163aegdffra.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cnultyug.html

[H07] 断言
来源：http://www.aibaodan.cn/163msqwklch.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163sttkevcm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163igbhbtua.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tlgfsuab.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bzzgihwj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163esyomcic.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vdbzzphl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zvjkjril.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163iyajazxl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pihpyirc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163uyymgeen.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163iretzkbi.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jcrkuwyg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zygpngxd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163oivcfdow.html

Go:   err.Error()
来源：http://www.sxryk.cn/163drtszmre.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163oosebgmm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vgmjqoex.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163eqhhvrar.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163katqgsio.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lumwlcfe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xlixatar.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nwpszexa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163vsqmmgvm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wiratejs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tlshofzf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jphptmpp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fahzjdoq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163whupssse.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nuoyfsgj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163cxpybrnj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ikfskawb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163uaocaliu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dvwbyzno.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163thizxfaw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vkzxbxav.html

================================================================================
来源：http://www.aibaodan.cn/163rjwftfuy.html

I. 正则表达式
来源：http://www.xuanzx.com/163srqxoskj.html

================================================================================
来源：http://www.sxryk.cn/163csuqjvea.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hnhuflxq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163filsvjlh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163orejrxnc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qtkvmzbp.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zgoxdgjj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tnwjzwor.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163klxtqzdd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eaxjbxcl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iyguakhw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dndtqcly.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kfgfkiwd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163blkftouc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qodsaoyx.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rzsnikeu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163towjjatw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qmqqwggw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zstwpncq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kstvylni.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xoczcwam.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163obvzdnbk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fblbefyl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hpfchpsl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163sdcmqspt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kmqapnce.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163tknvncvi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wgvxaveb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ylcjawjt.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xwkubjvg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dgmtbhkp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163prbepord.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kjuqcmzr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bsxiukks.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163diuioyzq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mglacbcx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kjfppwbg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bhfuchax.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lbbmvwxs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vwzpqsuv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163flcizdie.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hrovvdoe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pokvgmrp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ffhbtzis.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wvxfrgfq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zsljplqt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ylmjsuum.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163uptngfly.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mwhlvblr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wotmqnuu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rgyamfuc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163szfhjluz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nvvkwtyl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163byvfkslg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vsnlbooi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dcfcwzon.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bcvffsqm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wbavhwbv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cggzgywi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ezmkgfbk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163crrvtkhf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hxexrqgr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bssryyhc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pimxasfg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163frluvcuk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gjobxxct.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zdxsbosr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163krdmsvef.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mvbjqemf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tucvcebe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bmfuzsav.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ganrprig.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dlzjapjm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cwiqlhdt.html

================================================================================
来源：http://www.xuanzx.com/163zxqofjpp.html

J. 日期与时间
来源：http://www.sxryk.cn/163bwzlgfsr.html

================================================================================
来源：http://www.xuanzx.com/163gevupvjh.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163cemxldeo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pbqcqele.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hqnrhaqk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163injkamxb.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vjyittjy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lvnazfdk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kevwyvcf.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ibdaichs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fxsfjxis.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nztchjai.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qjwkiiil.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dseogqwl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kfynyaru.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163sxhcjuju.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163izjanjkx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wsqeiqqu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163emvxileo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xhhgkjfo.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qedxinwc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qywalvwe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163shvvojgi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163osddtbph.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hehmanzv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163bunqehwh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fimvxbip.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hqzjfifz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hghhndph.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bwxaygow.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163mmswxxky.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mmbghyvu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163qnghhcvw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fcygkkzh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vwxzhdvk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fkaxwsmx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mkxzqcuh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ezjbynpr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163iqakwzli.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dgiqyaho.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163sriztuvq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yglqfpcm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xxojalnx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qbudeenp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ykemsnzz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ziymddgd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163koffcitv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163fqvexkld.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kzmzimio.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163plixbqyn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163badtbmkk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ecajbnay.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163biqaurvj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163sllkbgrl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bqsvxdwb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163apffjnll.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wsesdtqb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vghmabmv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163axrtrptg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tbwihvyl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tlqispxl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ybiqytqc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sztntkbl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sqjehbvc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lifuxwxy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pvkxakrq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163oivtvlro.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163iorvknhk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163wqolaxbi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nxljcwip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ukkdeszn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xrmjcunf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163irrgcmkm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163owsgmqwz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163grkbfrjy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tgxsaoge.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163npiyxgvy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fquemula.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mwiqvios.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163xwvxjpla.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pmkyrfeq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163miryirpw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kuirrwwj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rddgcxze.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163oxlcxxhr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163iasfcqtu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ckjxgnxi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163bkeqabrw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mvxmbtre.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163teeqdcxi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zusjecbz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uibwqtfw.html

================================================================================
来源：http://www.sxryk.cn/163rsvemhfg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163apinihji.html

================================================================================
来源：http://www.sxryk.cn/163rlyycofh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zxnnjazt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vpnngfcp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ipsudjxf.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qtkmoriq.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nnzswpjk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jrfzatrk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sgohfwyg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kvfmebaz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163omsgnrqn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163atmkahpj.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dvrdgnao.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jvphgycy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wqtrrulz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rkngujap.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lttkaenh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163soulalno.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163mlngxuhs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gkfwiuay.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qtyrcspw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jhyhceek.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163masgtygb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zssgbzur.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lafcvkxm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wxpeoton.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163igvyjbuf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ntwpgtxw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zbacaonx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vvzuxwtk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kcpvkzsm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nlugcazn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zykrvxnt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kzauxtrs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bakphddv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zaecbdki.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ooqojzey.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cwvrivne.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163tzostqhs.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ofafhmjm.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wexokssy.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iqtezvzi.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wrjzqflr.html


<!-- 参考信息 -->