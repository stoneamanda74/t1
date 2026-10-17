外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163njejgyxt.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163pekweveu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ciffrbfn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163itpqkxqf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163uybsjdua.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ujbpahpi.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zduieoxk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163fyrwdkel.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ccffkris.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ecqlytge.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163narvjgny.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163svsoyimd.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hvgkuzlj.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163rghyxvos.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fosktnhj.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163wjawjhki.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163gwqujfbq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163nqmdinys.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lcrecglh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163sevkgcbn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hcaxvftv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wrwykjms.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163fyuiznhw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uxiccant.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163zkquyqlw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qsdxytnq.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ttmmnxxi.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ylmizrxf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ndhmpfmv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nvvtbljs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qbiessug.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jxrnrsea.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tpsrjeyw.html

Py:   len(s)
来源：http://www.xuanzx.com/163vfqywqcu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bbmbsljt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163zmjmhjrp.html

TS:   s.length
来源：http://www.aibaodan.cn/163rfqocmvg.html

Java: s.length()
来源：http://www.sxryk.cn/163pmxxskso.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163aouwsuva.html

Ruby: s.length
来源：http://www.aibaodan.cn/163icwwhlfn.html

C#:   s.Length
来源：http://www.xuanzx.com/163evzoyjbf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fywyczjs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163xwemghyk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163drtzwnrc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jhpaigmw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xvozchjd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zscreidw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163oluidkzt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hsqnhbre.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rwcvxgru.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163klrzvqrq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163llhqzwtb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163prnpjykd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163edlazzof.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iaezvprb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163pgdmuttt.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163fehamjzj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163qvjerysp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163yqgtbykk.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163uumipdxh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163omublcsm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163cpzcplil.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163deneopwi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cddvkjhr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vsbiauyu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163qsianhdu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fkqnzdka.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nmitgyma.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xydszdlj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163dacgujgq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163zyuzzrgj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163pvfthzef.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qzwiofnf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163nyhhvmwe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ksaxedmm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163syqhflfw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163cxxtnlae.html

================================================================================
来源：http://www.sxryk.cn/163lgcjmxci.html

B. 流程控制
来源：http://www.aibaodan.cn/163seavifhg.html

================================================================================
来源：http://www.xuanzx.com/163gokhpfzt.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gejuencl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yxrcqwkc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163uefbqfwt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oncjlzgp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yxbxbagz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zhspbpoj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163sohnuawg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163tmcumitk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zzasomaa.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163raatzwzm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163pjcxwbqy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163kthmjhvl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cnaqljwe.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hnrlbyer.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cbiodjtk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lpqvsjrj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163llwhcasx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zgluusic.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rauwfdgu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dsxslnfy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163lxwimxje.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163aqwbzuxm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163awkinijb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163pqjtgycf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rqgmoodm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163pfoxrlnh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ihpqunow.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163slbpcgsq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ugbrzyla.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mrfrlkzu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ssyxiasx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zfsywhua.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hhkfiwec.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gqomxruc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xsnilhcy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163iozkolau.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163exhivzxr.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163pvvdbxgu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jvjwxdgi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mpzeiapv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nkyetzrb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fjaeomdz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163eocjaqsi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ozolxyqh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zdevzldt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bohzuopn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dtlkmeat.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163bkdkhztb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vjakdjxl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qtcpnboc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vmoobdzf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fwewaree.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163lqtoltiu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jtadvnts.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ivdwzwkg.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zochhfaf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cmwvdheb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ietgjlll.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zmpdraat.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pmtntywz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xohztjiq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lvyhhxsn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qlqothde.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wgpdzrrd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163cnanhtke.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nhrjcjqh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xapidtik.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vbwkptvi.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163femgrdoy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163blaxjuly.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rqgtsbce.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xjgxctiy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ivvywifq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163vbcgtpdo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zhnakwdv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163plrvdcbk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wandpsik.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tvmjheca.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wfqqdyfy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ckovwttr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163huljjbvm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hvohuima.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163orcxrbjw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bevthoxs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pwglzggo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jgqqwuni.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jmydubis.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163afcgxqwr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163euzywdrc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qyagwhic.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163eiswdeuu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kciqbljd.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hmbpczwb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163iieuxzqs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hhjyoutl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163orqwuoyh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dzvecivj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163aofhoxse.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fkagqxar.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dbvswfyu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ncyfxoag.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zjeygaxk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fvyrunzs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tbfoqoll.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fbgcuesf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kffysobx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163drpwugpt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wljnkijc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163taszxzxg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mbkehkkp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vvfftzcu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fezwcwvt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163icqimnqh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ccwkrlzw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163llqykhiw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kcvrhvti.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dfgzdwno.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qvpcvakm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cbrchdbz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163sulpilla.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163chfvypcs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tyigljqa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163njtxogrr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sgptqfuq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163lfxytmqo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xdlsulvh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ikhguojj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163blkgyisf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nhpirveb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bufykyap.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kxnyhveu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gulpvmus.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bdpkfnas.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bophyveb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163siwsrkdc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fqtshyar.html

Py:   if not data: return
来源：http://www.xuanzx.com/163bkbofmjk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jhmtkrfw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ystfvqoh.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zgfpxufl.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lzejezsz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tshhtxqg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163heroyurf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163iygxtiut.html

================================================================================
来源：http://www.aibaodan.cn/163kmhteako.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jzxrwixv.html

================================================================================
来源：http://www.aibaodan.cn/163rysdfppz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163riffifxp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ppfzbofj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uojuhaeu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fqujguzd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yhlcgpzd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xnvjcgmp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qwcdthhe.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zqzxdvgi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kcjhrdqx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cxjbgoqe.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vrzkugrl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cmtjomvd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163aegxowug.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163txvblicc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dnjfjhdp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wztzhrnh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pgxzwjge.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163fmwokyyq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vplgczuf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163sflygazu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qbrcdstq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qnkbrfzn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gkfzfwmh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163syqohyij.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fsydalbs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163gzlhvjlt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rjplcmwy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163skpposfo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jonyjiyd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fxnazqpi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xxhapwjf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163kgowlqtu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mslsfguu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xmdtmnju.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163edqtzgyk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fiyfyzpr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bwvdodla.html

Py:   return a, b
来源：http://www.aibaodan.cn/163axgvucps.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163emovvvmv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163datcxrgq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163genfzbay.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hjeptlkt.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xrhlnwnk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vrdcmtxn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cbdcgdtn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xpbfwujw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nyjhhins.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hxzljpdn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hhortsjd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xohpqqad.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vfjifmno.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nntozmyl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pkgxoctz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vgssdfnq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dzjydarm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163znqasttu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163oopaywhh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kbscnsgz.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163sofspndm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jhhqopid.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kwqqkjlo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163csgsllip.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163djwrtgmo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sleepsvr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163gxolsfyu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dybcssdz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163blwrnoiw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cxcnzstb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zyknbuac.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ocobrnyk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bhrvhvah.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qrmkpqxt.html

[C09] 递归
来源：http://www.sxryk.cn/163zgrvcyzo.html


<!-- 参考信息 -->