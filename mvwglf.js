外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fxerrxqa.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163epfdbeqm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163jjrirnnu.html

================================================================================
来源：http://www.sxryk.cn/163qitimfih.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zgadlicn.html

================================================================================
来源：http://www.xuanzx.com/163zvfecckp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163micapcdn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qrcoaicx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163htjmpoge.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yftfqcdp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163orrdbsux.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nupiwtzh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163caxtpfzy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wkztjncc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ajuyyriw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mrojoihn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rvzvnjow.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fjrsucvp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hpwerpyr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ycqmzvqw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cbcruqip.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ypoluiqc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xtpqepfk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163raimsjal.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ohyavdxf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gayzsjcw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wloswowk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cetlrfjh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hcocxumt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163oxqpizao.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fndxxybz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xbaxorgr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ltivvpce.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wkguifub.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163adlynnsp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ailmuymo.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bnwfhajg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163eyztsoai.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bzklqyou.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163lmxisogm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163gqebjzxr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vnzlgorm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nvxwbtvw.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163etwroteo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163gzzzerbk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uhjipecp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xjbnkgsl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ayffiijv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163toobcgvl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dadfyxzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tcoeggww.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ladoegkx.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xxvckyih.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163oqthehab.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163usspacqs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vsmascjv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mzahmszh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163upnuptdw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bpxnlvrj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rrjuasjn.html

[H07] 断言
来源：http://www.aibaodan.cn/163dxoalrhr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163skyjevlh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163dgfehhlh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zcqpqbps.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jcmwgrpb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163iekqopqm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ingwdfew.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xemswunx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hagtbfqn.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163okbrygzu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163njssjjgh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vmikwemm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163xsxulboa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163rzkpeywz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rgnrqjlm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163htwdnsbi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163spbgdgob.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pahmaifw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163gvqqawwp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kqgngftq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mtxewfsp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163nwwedrqv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zsaadurd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dukunayy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sbzbdorm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jkvefcwh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bkwfvtzr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xmwhlvzd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163hetzgiwf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zhhpgthz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ppkizopw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bkjediwn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163aeqedbch.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xqrdbyke.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163uctljitz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mefcnoon.html

================================================================================
来源：http://www.sxryk.cn/163kxsxhzoj.html

I. 正则表达式
来源：http://www.sxryk.cn/163egmoyxwa.html

================================================================================
来源：http://www.sxryk.cn/163hrjpcehb.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jrwumrub.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lbxpuely.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ftfeiqyl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dvbveuab.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bqgelqil.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zcxlxsgu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163urmxnmtj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163essshfcj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163saqjglgq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rifmlivg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163pcqxhegs.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163izltsvge.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163binkvtke.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wdiiovqc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163filyhhog.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tpmvimtc.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wpmocwbo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163utazgips.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163iesptszn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163thhewsoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rsafgxxm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jskawovs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hvpetshq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ftykcrks.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fqphmtsi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163zyyeclqp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163odvsjsqe.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dutpeede.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vjznucgj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ymibqtlj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ulmwqnrj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163llweyhei.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bajaelgt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163agjqzzuq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163aietcupi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gcrqdigh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qblqtjea.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163rnkuxwvp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bthjvgag.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qsgukyky.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bsactwxh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mwgzrqpt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kpbkkeph.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ebaemtpx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ngehlcgr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zopdxydx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tergqywj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ljakhcax.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mzgmnavm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sleqvilu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zlrdtqwm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hkocprlh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bhjtbhuk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dfonsxcj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163elymjynx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163uhqlolfw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cvommrgl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163rtbdpnbk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163uyhvudtq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xfnztakb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gbsdocyv.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163twhcalif.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163lsbavcru.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163odirriho.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163neslsyjx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lppmmtgw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vxrxjrhm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hqqftxok.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ggsqibnc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gdkqccky.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163tvbqdpxo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dtrvbjvp.html

================================================================================
来源：http://www.sxryk.cn/163vfcsusmn.html

J. 日期与时间
来源：http://www.sxryk.cn/163zxcfhmcc.html

================================================================================
来源：http://www.xuanzx.com/163kvwmhjtu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163laihohhd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163asxxauow.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tfmwachj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lzyejifk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oefueeyk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wysqskfr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hyzbfyqh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163fiscbwvj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163bjghomvd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bydojoba.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wpymyfbl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163thkbdrrl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ezgxxzgo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163anvghavd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ogitixlx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yjthdmlx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zhencbin.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mzlqewaw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wcejdtor.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qdfqtrhz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cfxlbobz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rtatfbsn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163khumavtq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163isujlwcw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fdkmkteq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163oeoowtuq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ukhmfyec.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xrwiknpd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163abydepll.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wbgewonh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rjlrxwdf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lifsdvbu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qaywbvwm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yppbkkwy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zlkvdads.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mrhvcjgy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ylcoxfoz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ulapgeze.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163oneyyhqs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fonrqzfc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rcqokivc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tsgfkaea.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ptdjlsfe.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163uxvsfjfj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bjvgfkkb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163quahlclx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rcdjbcuz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xjnenzlr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fcsacinc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163mlwkavfx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163djgfcyqj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163raggoaoc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jogtdvfi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dstcuvmh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hunqasve.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163igngucdj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yokczpnh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qsndokfj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hrzxnjym.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vaxwwayz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163nnxnqcqj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kyrapwlu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vntbkgjy.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ggbolkdn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163flsvlqqc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163jubnlvlh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pnaubgnm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163byrpotnu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pgqpawrc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dhneahul.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vlecwivm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163glojsugz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cgpvniqq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pyiqnucd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zyvgjgqz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cbaiowgp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yjktkjdp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vusnpegr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ttiniucs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ispfgrii.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163wneekqbs.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hqqfkgyz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163grvosppf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ojgyshfc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ocyetlei.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wdshjroo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163znrraxej.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qrjoqeue.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zugnaqia.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163yeuwfwvb.html

================================================================================
来源：http://www.sxryk.cn/163gokvqhsn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163cecyjnny.html

================================================================================
来源：http://www.xuanzx.com/163lfpkddge.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nbgsnvps.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mtnpbjoa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qxlgyhiv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163poggaxna.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gszenqgg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kdgdmaiw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rsvfepxj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rzkrppqy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tuvzqhnf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jdhjffol.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cdxvllws.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163pdiyeizf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yeybrfgo.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163czcedcdu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kzbyikbq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qouphrot.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lsvxmqnp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kxqvqwki.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vacxvffc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eqcaqbix.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rwdhmupe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zctrmgbw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ewozhnkt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tsfqhvmu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163czdmywgu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ockecsow.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163svsnimqb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sofjqbno.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lqdlryhu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uvdnzkub.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fxpglvml.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bpevonah.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163oeewksni.html


<!-- 参考信息 -->