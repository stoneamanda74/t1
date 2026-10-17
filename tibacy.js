外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163naqeqixh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163oescbsde.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163vumisgvk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163idzivpei.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hmlbozss.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hzomudfw.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ziitwnia.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fhhkmgxn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xamnwycg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xuetgzia.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lvycbqxf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163pakkbikj.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tssdqgtt.html

Py:   len(s)
来源：http://www.xuanzx.com/163kghrpjxy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kdbbppfd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163nylatdjt.html

TS:   s.length
来源：http://www.xuanzx.com/163ukbzdilh.html

Java: s.length()
来源：http://www.sxryk.cn/163axxorbrh.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163hjlqxktl.html

Ruby: s.length
来源：http://www.sxryk.cn/163afpmfqym.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kicysapq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rgptnxky.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cppzxouo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163fwnhbsur.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gbamarjz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vamoxfbg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163htmudozn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vyuoqtpj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ocpwufhm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qhgygzpi.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xriqptlq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kxamracu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ofmnarwq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gkxcjyss.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hxbvedlc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bzaugwse.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163uojnyago.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163mvyapokl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qkgnxvpl.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163avxuwccz.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qzmltsqv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163cqcaerov.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163azwwfgev.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zmcciubi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jvcoimvo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kvgqjuqd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vejhlear.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163atepcbkq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163rldgyzta.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163xuhdrdsb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ozkdrfdy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163glfvnmww.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zdtltxbg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163mbimuknn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rjbxgbfe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zvamkbwe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kiixiusp.html

================================================================================
来源：http://www.xuanzx.com/163vwcjhimh.html

B. 流程控制
来源：http://www.aibaodan.cn/163cszgooxi.html

================================================================================
来源：http://www.sxryk.cn/163upbgvtdl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163asotpigb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qypzfjjj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kjzupknf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kirpcgbp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dydxutkg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aqzodfpm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163aozgites.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163oejpnlzs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vfuphmui.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ubnyjfqb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163lotqxjyo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wzrsijpt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lxffbccy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cdzjokcc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jukdblac.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qvsizysf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163plzseupa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vcoosvey.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dndazbey.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hjgrnhuk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ecuievgt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dxuswsaz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yqdswpcu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163skvjyhjj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ewuxtzke.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163haxjwgen.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ijaitsly.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163azwexyhc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hegbavav.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qzitxtwd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jdjmhemg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hfxtcipj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rszzelzd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dyidfulv.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wredyxnu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dbixqjwf.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pwmzgsow.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163sjmymzcn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jzsbkack.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cyemipab.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kropvqfe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hhrlssot.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hfmjtktx.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tffklcnq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163frxuiwhf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163khvdyosi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163cqqftpzq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163smjhnnqr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163adicblrp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hpuxlbaw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163kmfxsaqa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cwephpoi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qwqpdrwh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163qkzjwqno.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hdaprehc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ayltypnw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163llcslidy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mfolplaq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163htcfonhp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vittayjk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163jbbslsyc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163iejvfiup.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rmbpkuyt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163aotkmphb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163iwcgtdxe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lxbqabmf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163latedjfl.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dbnnnsce.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163norxfspk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mffsgnww.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ktisaqqn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mqvpqouh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lvupejdt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163hszmjxzl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163bxullsyn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dbdihhkz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yywuoslx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wtxcrgtr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qlolykpu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xxejipxj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pbtqxnfk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rmdxvzjv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qsqbykwz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ypghebtl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163baresqsd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dqgefqzu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mowlbhdo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cawnsqvt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lqefcmev.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163elzqvpfj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163twpdomee.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bpvllwiw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lzsqkhcq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sowkzaem.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vzluuwcc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zfjrqluw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ncgszjow.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wiapuyfy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163whfonqic.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mfrxfnbd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bpzmrzfk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lgnlkrjv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gxctglyk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qtezvrfw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jdaingrv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jofespsj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kezmncpu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163thffrrhn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jnsxkahw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163uzlrjczy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bzfpxygz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tmloobnr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ovhzsojb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163enxiuqmb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ysaufrrq.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nqjbehcg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kjygbnks.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ivnqitki.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tpnmvsic.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ktifkzln.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ovnexqfz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rdfqqehi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163irzvgeyt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163uysnrdru.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rerkejpq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mcfhgysx.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wcggmujc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ohbeuxca.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163opejiwhn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xxatxqcm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zyhbxslv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vddsykfx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xsfnirkn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163csloqvea.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ffyxpaol.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kyrtmlbl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xwfpfqty.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ghsvzxsl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163onwysrbs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163tuijenrl.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mcxfppyu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ihtauqac.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163iblbotrd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163htqiywsg.html

================================================================================
来源：http://www.xuanzx.com/163ubwqtszr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xpajqogm.html

================================================================================
来源：http://www.aibaodan.cn/163ixtisbpf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bpitreml.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163toqrnljo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uomyrxlc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jsaicrwi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fucqpzqh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sjtlqmqm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vcxlwxci.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vvrlznje.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163emdekbwf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pdfszumj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bcouoopr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ckjlvdxl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163kxhkfbat.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jexzagua.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mdjdpdny.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ssxagksi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bvayuqgf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pjzobwwb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mbydjbdj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qltdxvta.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dahaqyze.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qawmryuy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fdhdwhor.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lrmooozd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zblutkrc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163glmxxdrg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xgukccil.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zxytbfqs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163shwqisrq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163epnbgogw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163fytzmifo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jrshwtds.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gmvtxpot.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gwpbjach.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nuctfwet.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163umaiaxcx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hjjbsczm.html

Py:   return a, b
来源：http://www.sxryk.cn/163tszemhzn.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163edmizeja.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gdesdjlr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163oxooosno.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pvbgrjmh.html

Go:   return a, b
来源：http://www.sxryk.cn/163jmdaqhnr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fxtqiirx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jwyyxyzv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mlrgtysq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ueggcgpk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yevreeiq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dpwejjfz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163renmzkcz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163utntrzay.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mrfogubu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hzdjmwul.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163zrfszwwo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163tfyicvhm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nwdiihsl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aqbnmbli.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163musvevmc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ziazpzvg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163mmpkzivm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163yqtyvhut.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lqoqmufc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sxdvtbpu.html

[C08] 闭包
来源：http://www.xuanzx.com/163rutdhsos.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cfadkstw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wtmatmds.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pyfkwpid.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ijvsfluh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vvnfbrel.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ewagifeq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zrfjtzee.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qfikgnhv.html

[C09] 递归
来源：http://www.aibaodan.cn/163yxcsfuax.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dfednlfn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gfykeyug.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kvxygvya.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rvwmpltb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nylewjdd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163snpxxdtf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mnumipyv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rhnaeqin.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ksgzwqve.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zskvfjxf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163aejattln.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xeoywxzq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163tkszuyvs.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163cgihptyl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vxbnavil.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gfkbdcep.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xuzijsyp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163davyxedu.html

Py:   from module import func
来源：http://www.xuanzx.com/163extwvwmw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qkxfhosw.html


<!-- 参考信息 -->