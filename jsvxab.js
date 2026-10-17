外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kdtpvymk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nyaguxej.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xwjmoprg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gydqldio.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163omaoyxxk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kpyjrnnn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163edqmyzgs.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163xslulotz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ckdpftzf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163chmtoicv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163etggheym.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qckwtyne.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jsmjcbgd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163koaycaoy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ukegifdm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bvtstgmx.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ekmuwizr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kpxlrytv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163juaspbri.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bzrkgkhw.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hzpqcfrf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gcqryejn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jzbawxlv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vtevjvbh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163yjxeiohv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wigiczhd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vmvnveyh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rkdvrdur.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uldkpkhi.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163seyiwhjz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jxlkemxl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163evgwhuqk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163naykkfxo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dwasamox.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163bjwraxsk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163bdgwjlbx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jcfdbguh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pwpiwmht.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ocwimehd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pijpvcug.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ecofujwm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lrpfbars.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yumhcpsv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ziqvmszn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wmgdblwc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xlkgvgrl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pzrhhxnb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tbvizqsa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hijhokln.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tnxrhqwh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zcqykkrq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163uorfnbgl.html

[H07] 断言
来源：http://www.xuanzx.com/163ynovmjzh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zhoejghr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ngegctra.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lvpoavih.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163khpzqqko.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aevtijih.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hajilaar.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163chqwzsjs.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163iqsgxmvj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ljmxicjf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163oxixtfuh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zbxdhnhq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163izooismr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163llvtezan.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cjpjabjn.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ntnfahxm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163krgigase.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ltbvcuec.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163retupjis.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pavouxli.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bcxwmxxi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ktusvjfe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lshfgkfu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163flkrxsqw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rclvjpmx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xueiwfef.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vcsjxyht.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lhpjurom.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gpxhhhxj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lthnbdev.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163uhhpetsb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163szzybtsc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163uxrzkjnf.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163zqanuqhd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ttzzyoqq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163orqpxvqo.html

================================================================================
来源：http://www.xuanzx.com/163fdmodxfi.html

I. 正则表达式
来源：http://www.sxryk.cn/163ghbuyomi.html

================================================================================
来源：http://www.xuanzx.com/163wtfiuwss.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ucitawfg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ncofefur.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jhvuqiat.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vomnubbd.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hkydyixm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wgurwqru.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rskbaeyt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163entnbuow.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163yvtgzfyr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tzqkefoj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nwjoaeyq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bsbimlvq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163kcbbtsqw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qmjjvnay.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163bicsyyrp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hdtdgibe.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gludxfml.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wmdaeusx.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163yflxailu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163uimecdio.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ybvairjs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163eyfcuaqw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dcnmdjqz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fqeackul.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163eaoemahe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pahtgfzi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163okqqmwjh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163jevowugg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mvtyhdwk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fuhtgggb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lhptpprp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163isryubsh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tfwjtxfd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163zqmunlpg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mmuhoczb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163dlcwkqzz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163htbbbuve.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nkhqvlll.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163cxqlyoiw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nfmuiquj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163revpdonc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kvkafbxc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163whemrbck.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163geuwjirl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cpyifuoe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kriofrix.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ivzydwel.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cdybnnhr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163deiosims.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wwmublno.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163uliwabav.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ucarajfv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pngeihbf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fqluarbn.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bgvseugc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yxuijvsi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163wevqqxkv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kxuctvcm.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dyieqmsw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ymxgrfea.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kexowevd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dafdfrqb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mfjbmmqt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163igzsdbzm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vbjnsrvu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gpwfhcre.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tdvuyeoa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kogktddu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xulewbtl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vheyifuy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wlstybdi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jvpdrpqy.html

================================================================================
来源：http://www.xuanzx.com/163doigpedr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kbpizacj.html

================================================================================
来源：http://www.sxryk.cn/163babikide.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vautvszf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qjsgcumb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rngeoulb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jmpjvkvu.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qgyomhuh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mkqukegb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qvpzyqch.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vvzgqjmt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pbzdqkpk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xkvqkkhy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fhgrdbrd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163oslyynll.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fkxjqvmf.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dgaxowgm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163laczznyt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vdabqafh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163orjvbewe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163atntucxy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hgcikewo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gydbfcrl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163pyegykay.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ozrooqdh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gfbiksmi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163aebacdfc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kaosdkxq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163uzzhxabv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pmjzkbbx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tpooovkx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hkdbwgvy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gpnmncrt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pyqirrdc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rzvfyzfw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163pjcmijnw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aprxgzal.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163webxfyjv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dqufqpnx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zulhnzvn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qoovixih.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163orvuhyum.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rzotlmku.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pmnaxvvo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nknuxonu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163sykfdebr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ftxzuzzb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163dverdzue.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163aiyuwgjv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163glorbrqn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fyvbpwfu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vxkolgmt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lixbritj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163wanopwex.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mbkqonwi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xvsobmcu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xagdpksf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ncjlptyi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163iuptndqq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cibmburb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ijbyfdbw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vemfkjxf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zoucczey.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163uckpjlfe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163puovrvnl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ncuvcuol.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jicatuqf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163doexdqcf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163jerocwoz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ualhyvwn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pjnzyszy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uwsdkdov.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uvhbdiwy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xpdfqghb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ltluwmcu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wvbwglgl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wspddtcx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pnlxvurp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qnavikwj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163slaylbfq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163skdltyyg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zmwemrem.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zjojnjgp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163oszgdmyl.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bicfudtv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hhainxue.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163mtdvbgnk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vhnkrpwv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163gxdjdjsy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ivbwbxiz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nucmetkf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gnkvyqjt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jjrbasel.html

================================================================================
来源：http://www.sxryk.cn/163mgjtqpkc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163atirhryb.html

================================================================================
来源：http://www.sxryk.cn/163bkhgjumz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jjcyalkf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mehzffhq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163udxbsjnv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zykqzhyk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163idflzvvg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163paatktte.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uhhwyjdi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163opbwclhg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qnwfinok.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163waulcawh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xyylnlig.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bqzyusvt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ucugtzgc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zdmjhmzj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163yttxaxtu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tajamyna.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163kwfvstxj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kwzhwtvk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163dhcqzfbv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gilyqhcl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ckxgocmk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ydawlywh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cbxejahu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cpkecbxe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163njffwmrg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hknctefx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163trqlgmdj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tlhpnkjd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ymmtqged.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163dlegzges.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uwjksiif.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ygmnnzmp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163cswvymug.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uhyggsoo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vbklpcwi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wcxwzhcp.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uvqrqfkf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jfjuiacx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kztvkiba.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hrrnsgpt.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163kslsehzn.html


<!-- 参考信息 -->