外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pqotvmlm.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163spdngyml.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163tiqjblhf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163jfpukdyh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163zstqgywh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mxdovztt.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163bkxbxdaj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163bhxxrxzg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zuwukdks.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163exoxtyym.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163xtdvqqlf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163macwjcws.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163gmuhncmd.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ofnbpbuo.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163qdwwtqoe.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163fqddijiz.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163thnqcbdm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ycvkgzdl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pexkfgbg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fsbikahv.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dkotqken.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163plazsydo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ipgirrlw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163tkfzsmzk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qintgnvb.html

Py:   len(s)
来源：http://www.sxryk.cn/163oliraxxs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163sbfhirih.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rdergdop.html

TS:   s.length
来源：http://www.sxryk.cn/163faptnote.html

Java: s.length()
来源：http://www.xuanzx.com/163ctbfastl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163xvbgonka.html

Ruby: s.length
来源：http://www.sxryk.cn/163vqcyvicx.html

C#:   s.Length
来源：http://www.xuanzx.com/163heudcjzm.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cokfiqpz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163fooozfrb.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163zrnmoydp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mucxfotj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pfknefsm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kplwcrui.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vjnuwlfq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jarqnfiq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163tmpivgio.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163xhbukmag.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163qzpuscji.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163lferchrs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pprxrpov.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jqjqcwhm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163uxkyxboa.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163aiexskil.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163iqcmhxva.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163uupdgmij.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ujzrtqtr.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zqnsljbq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lauyldhn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sjzilvwb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163yipchubu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163cxuigvll.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dvgzbesj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xntrwely.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ogsnacuw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cyhawnyc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bqpxoujr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163awfzpjbe.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163uzffgrvg.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xpfyycks.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163cyoobhgi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163znkyeqjx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ldthyjjp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163uibjiikn.html

================================================================================
来源：http://www.sxryk.cn/163ikhxdjzd.html

B. 流程控制
来源：http://www.sxryk.cn/163esastgjb.html

================================================================================
来源：http://www.sxryk.cn/163qyqqtbwv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163erkchvkw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ooymoken.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163sypaoram.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163obmhkrxw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ljovaujp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mvntuogh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wwlzzboy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163sgfcgllt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ztbmgovj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vxbwolmo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lmrwtzqw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bpukcdem.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pngfzwty.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wfaswgtd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kjjorege.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163enohlgyr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163msrnxdmo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ndfacoif.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163swzgrmtq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163thtdisys.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163sfduuhar.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zoqznrnx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lrkefmsv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qmshnrod.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ddscdbpb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xsbxacwy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qjgynnfg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163khlpslle.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hfzgjows.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qyrzwmfk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gfqqgbps.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163geqxyjxc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163yjvbrltu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jltpcvzd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163uuehfijg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qaiptduy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163swamzrew.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163roghcyfj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rutncpoy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hcgswjls.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163iexgcjfp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jfbxylip.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ugznwmgy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163iktazdmg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163yckzizfd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163urvgblgg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163orpjsvuh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wpndowye.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163djfrwrvi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hchkzowb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zuxaoiof.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hybijiqb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yylswxow.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163uyddqlpe.html

[B07] while 循环
来源：http://www.sxryk.cn/163pnqlebqy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wpuakthh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vqurtvvc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vymuxbsd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nrpiovhi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yuvuzztz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yrivapot.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163udgjplju.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cxtekddw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vuedkfxo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163gvaryoyx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163jkalsrms.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qpouamuc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xrhrtbep.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vfwwmkcw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xcyytmki.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lxbjgcwc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jzmyltmh.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uozpejbj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163hcwdopkg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mdahmkth.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvejwqhb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fmvmmfau.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lwogrvhb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163fxzaxzfe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163gftklggh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bejlaqpl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tesoywmu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fgpyoiru.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hhgtkuqg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xzumerxz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163adkpbnzr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tsmgaqkv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zogjzqga.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163fmfkyhul.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wybwxbqi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gzyuncte.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xnsflkhf.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ecgbxisf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kcxzdmyh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yuimuejy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qqsorudg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163umdakhzf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bhdivacu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wrccmnvi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163tbciigkb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fkupwphd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jmvfsgiu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xwtecbak.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ohtphlhz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zueplwtf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163zjcaajsj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nolnqjzg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ookoqdte.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gravijau.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163omnnnxdo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wsvftlfi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dofejfww.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qjoxqrhh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qyxrqbna.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yzlsgyxs.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mihnmgqm.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xuanigek.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hdpyfojh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163eqpvixxh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ztswsyml.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163spspuyvd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eubhtzrl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163auxjvktu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ssftheoy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163heqmjvev.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163elgvtwio.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sknojcdm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163shumgdxb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163tcidyiwy.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zbyrtpzd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163nwexhgrq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dmbtnfoy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163hanyumwi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wyxcrjvm.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yfhywcxo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ilkwzjqd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163iuryzwrg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yyxggowz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kueomqpo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dhgneudt.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yydtkjom.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gvgmmhlp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vkepvqie.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mxojbzuo.html

================================================================================
来源：http://www.xuanzx.com/163sexhbbfy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xilbywze.html

================================================================================
来源：http://www.xuanzx.com/163clfbyfmm.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hofhxmwy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ehbzeqko.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zqkzsetx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iiqowycu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mrpgygmm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cttdfdwy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rpdgtvad.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fquxnpaq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ilkdnqtc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wpwbshds.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kvwexmfa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rrojtkvc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163sbbyeggy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pmuwfdfv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ilybmgly.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xehacmpb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xwfdogbi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163onwnqwlm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bqiuxjuc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lhyzordx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163eorfkgoj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163klrivhls.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xcjpyeds.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pdsjcmiz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pinesxoa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163upywuzyj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ypgbefvq.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163miztofkg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163iihmlmus.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dkpvghhr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wwxewusk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ecsuwrcr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163btblnslw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163scgfpzcy.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wmpdsusv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vrbaweyx.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dhbyusce.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lxjpybfd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163venclbjc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tykrdtqs.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qabqpbaq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ezhcjpue.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tsqtmjqg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gzwdvkuw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hbptjuxq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uuaautpk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163rdjeaboi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163usbamdzb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163eqvllwda.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hsenadzf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163eaqrrqqs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nsogeasg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163onpssjdm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fbnetzlv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vxebkpfi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163yvojcgrc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zyeqgpvh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qrwnkuan.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mpksqtgd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nypfbtvl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kglzwvba.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tcimzwmk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qfppxtzx.html

[C08] 闭包
来源：http://www.sxryk.cn/163ccrwdjex.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oqoyksbp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xckgnrwi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gvxvglbw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ktewhtzk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ppjceqcw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163adrdtpiq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163tbrefplp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lysnduyv.html

[C09] 递归
来源：http://www.aibaodan.cn/163vqmurdjd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dzaqwnva.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163grwwumxh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hnxcjjnc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wqmeogrf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fwaamavc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163unytzhqm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163oecjjhaa.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mkwfkmlq.html


<!-- 参考信息 -->