外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rwubbrtv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wygfjxko.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lzfukbnx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pqyhxvta.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hafjacjv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163skbrlbml.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bqmmsguh.html

================================================================================
来源：http://www.sxryk.cn/163nuicygig.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bexckoxq.html

================================================================================
来源：http://www.xuanzx.com/163bnxdpkyq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gbsgffmw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163clgfguug.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uqwprzfn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qinmlwvf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163yjiawzcd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nsyifnmo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163wbiwpwzs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163beugrxld.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kpljuexv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qkuffkmy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163denluxsp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163diwyafhk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jmxyrifw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163deifpznq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qxntnbsp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163nfwoogaj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163fyetsivu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xsxvkecb.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163jbcsqcft.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163rmxcmacg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nmaocttq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uicsxtvg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vnhrwwhv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fhynnqoe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nkvjnonr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wegympta.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163neclmsyo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cunpzwkk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vnkrrnll.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163aqvniyfu.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fpbmibce.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zmlxgrip.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163xgsrnacv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pejhodtf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zjgdzays.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hazbnlzk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163mrfckttj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wtmrtrhn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163osltuhpb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dpikknov.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xanwrykx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163aytovnhj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rolldiui.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pzyuqcif.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163jwcrezat.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zffozpoi.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hlqvsffm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163blzcfpfn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fmtqusut.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zbgkqazh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163prdcaudc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163aaaxigyd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ibxjntzw.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lyakbxpr.html

[H07] 断言
来源：http://www.xuanzx.com/163qzrbmmdm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dqjxxqwa.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uvzswmyh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163inrqlcro.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ulnlwdcv.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lcmfnxtr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xcpcgiwv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163glnxbhrp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163bflxuadh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163agseyuvb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163uhregbwn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tvnpntmj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163sgpgentm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bcdabjbb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bdzolzld.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xnjcjcji.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hsmopyyw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dcxoausf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163lixpgqgk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163eiiwbmdm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hvtprejw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zbqlhjuw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qqwrqlfd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lyvnptfs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rggacjuo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rxwmxybk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163uovvowub.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163gbkiljrp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nfnerdgb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ddobooln.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163owxfhzul.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pmjgrudx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163lbgjqsdh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mehltkgm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rqaulrbz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163szrhwxvs.html

================================================================================
来源：http://www.aibaodan.cn/163oscvjggw.html

I. 正则表达式
来源：http://www.xuanzx.com/163uunmdlqc.html

================================================================================
来源：http://www.xuanzx.com/163ojacxpgq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gyciyexr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163opuatppz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tvssufwr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bdlibyfv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163itvpcmyv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qgorvmuf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163cynuwnzw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163iymvluap.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hjqrizgl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163xcqnhjsi.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ahuvuizw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wessimla.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163wkwltikp.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dmulrbcs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pihlxqsy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kbirmens.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163etbkhwes.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fhkerwdf.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163iyozlslp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163iqjcvmzr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163yxrmzipi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163laayxipy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163gzgvdrnk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uwnegamw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yvaqymrw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163euxfqhyw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163nxubwynf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hydniwse.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vvuobkoj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163stqsduul.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cgxlbkde.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cnlimeec.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xfiyytyj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eahojluj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mnxvuygg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163eibazbra.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163budhwaxq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wpwvbxdd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163atmperks.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mxvicamq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163usrnqqpd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163kesbghpi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fohkxksi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jamzdkpw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lyhtngie.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163afskbpzq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oymctcke.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dzvmgorj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163smpdmwku.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163icaypozd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pxkxuggx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163lsnzcwiv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163vhbcqpwv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kyvpqnhc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jcqznwov.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ixsemfsn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qxmkblmu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163cxjypynj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mpmmglzy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gzfmqlbc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163oaerfyvx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lquyqppl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kgcothvq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uecppjgn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163xquvztkc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163irbedqwf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163leosfdep.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mbpdhwdy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ofkpldwd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rweupvqg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wssqqkrd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wacfswka.html

================================================================================
来源：http://www.sxryk.cn/163lhgwfnsz.html

J. 日期与时间
来源：http://www.xuanzx.com/163bholrdzd.html

================================================================================
来源：http://www.aibaodan.cn/163qrewbjps.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163evmqsysm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jyfoqliu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gsypsymb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lkrqkrro.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163yrbqnsfe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lsjthmux.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fdnkozaq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zxowaina.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163drspqjdu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163bstvyspf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wggukyqy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xmahxcbv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hkohejkc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jsqtjqpn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tumhoaug.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dkxcmwvd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qvezxrfl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zpphyqpa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pnpgputv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pbvrosto.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qashouho.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tpmslarn.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uxkwhqaz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zdkuevym.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tapehesj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jnoxsojf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163oiiucpdv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ssfiosxz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hcpvowpq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163noykuwcp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dlcuifvr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ndtfnpft.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kfgqapbn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qmsopbkj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hppdlfdi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xwjayuqc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bkbrjqxa.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163usvzohzu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xtcrvcce.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rxytjcpu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kfewgozl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tpmtszrc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163cpsseaqu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163galpuome.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dpncrygr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tmbqytjt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gddfukwc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bhofywfs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163txdtzbwo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ynpnhwbx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ngqnfkdx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163krzmuqmw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bfxlgkab.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mzedumxm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163uaxsbjrp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ilwajywj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ujzkmero.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wotsyrdx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fdcgzgmb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ufuvvoid.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hrvxmjlz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mzkdvunz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163reripzbv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163loffwyvh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rapcnvvv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ybtlstjf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wynhunjv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163zgcqkzqy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163isdordkj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163icgzcqfy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ineyujxr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vrudenxu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rdvpdenr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163slelumxh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163szcxclbu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pwemieqr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163btlebxju.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fqvksvnn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163iofkohld.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163eibvsyji.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uydggnmk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yuwwhsun.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wwkdudmz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dehpxyne.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163egzwqusu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ghkqqayw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163czzdvdyy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kzgnwdrz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mljaskbm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kwlgujsm.html

================================================================================
来源：http://www.aibaodan.cn/163widqelkr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xaureber.html

================================================================================
来源：http://www.sxryk.cn/163gzdwjgkt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163anhcprrd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163suocpzzl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lasxemjk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yklzyois.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pumcxykg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nqjwlsww.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163blmjthmt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163adfmqmrf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rphogfrv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163zlutnrld.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wcbvrafi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aotpicep.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tgnddaom.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mkfqkxvc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163scvnvuyu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tnqlymcm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163dokhfnua.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kwgmtmgx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jsrbojek.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nmfuleqg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dcxttavi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wckmyijs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mdzupuwt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ucxnoioy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163tbnmmyfb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dnkdhiez.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dmdfswvp.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163qduacolx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dqtvsuct.html


<!-- 参考信息 -->