外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163xdxuwxns.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163xvoefnfs.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163lctrxzzc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163zxrbqefj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163irxumzkh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zetfrolz.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163zmfshhet.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163mbftwurz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163olojooyd.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163xpoadrug.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163gyxonypp.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163lgqopibm.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163kybiavxh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yhssiexr.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rwktxgur.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ayhnovqj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jzmsomzp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ariybrfv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lrgomhzr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ugonssbr.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163lemuwfyn.html

Py:   len(s)
来源：http://www.xuanzx.com/163zuaowdtj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ptcuvrvm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ueaupmrp.html

TS:   s.length
来源：http://www.sxryk.cn/163onmfoiht.html

Java: s.length()
来源：http://www.sxryk.cn/163hkagricv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wmtrgeot.html

Ruby: s.length
来源：http://www.xuanzx.com/163lvwjqhxv.html

C#:   s.Length
来源：http://www.xuanzx.com/163iuupproj.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pbbpawmm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fmaxexsf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163wunvwxkg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163obnxfzer.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ttcahgsx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163skhkafen.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wixvavnk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wmomppli.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yuarmtbo.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163aojqbizo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gvhclaph.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163okexjzbz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163znhcsqbu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ohtggwjg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kgfxfzbn.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163sygfpcla.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163urftcdvz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163bgddlcuf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163dotkjokf.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163muyobegi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163atnsyfhp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163crjpkvto.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mzacbvbh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163tbryueps.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163azlbwdrp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pcwmpexf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163yhdtzvdy.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ezwivajh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163odpmzvlh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163freoozol.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163juaqmgje.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163fwzmhmeo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163shneybfz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163uwhoffvp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163yxbzgjwo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iklfxgco.html

================================================================================
来源：http://www.aibaodan.cn/163quhjcmnz.html

B. 流程控制
来源：http://www.sxryk.cn/163agpllsxe.html

================================================================================
来源：http://www.sxryk.cn/163uapdzkux.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163hmkcyaoj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163yvbqhipw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ccewcawz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ldimrhsj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mluqesdg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dftjckdq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fatouhcn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163fabyckgi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sorruprk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qlizqbht.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kahmnqqj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ksyeaiwd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mozcaxwa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lrxnualb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tdbvthtv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zqynotad.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163scyxlvxu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sgynyrnk.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163eopykoot.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163eqmvzlnz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163momgevsp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mavlvcev.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zbyyqjui.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jjbjxxiq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163enjigzef.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vifcdbky.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ivsvfrak.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163rzegnyku.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163cflsbpcw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bbkkvglu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bqprhchy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qzygtfgw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xhlkeebb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mbzfhzlj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kchtedzy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163llklaftc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kxwrbrpw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jdlhaand.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kzfhywbl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163quimdosg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163olmyhjmw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qogxzjdd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163auwtprcc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rtkmodpw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vaajzest.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163btmcsorx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163izldyncr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163okxejvda.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163epzieckg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dlipjdkv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xtdnuwsx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bvgqyjcl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mkglpgjt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fveblenj.html

[B07] while 循环
来源：http://www.xuanzx.com/163czsyelrd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163iedjuojz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zjdluibq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163woquxefk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qqhpevlb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nonxorvd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163jyryzkkd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163voucznnv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163onylzxbm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ukuuvnag.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163yswgegsu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163edjvmtxw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pdfiihuh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163swudcqdy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tvhycmdo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qunnrycu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gixzfdul.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163prfpkuye.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xlzoahwr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mtmcmdev.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163omeuraru.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163parkhxts.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xvduecut.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mmucgqzh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mfmdtimu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163gdkrusdn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nafpmxlk.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163miatnnad.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fuiqnoab.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163movettob.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tnvcvjjg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wcksxsoz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ghhrizlg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gjelasjv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163loqyqtje.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pblhvqpl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163aawzfwlj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tkahawvn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zeozdvyo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163etjilaxd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163odrsipqk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163zeyhnbrb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dgqmrmxv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163icgyvbqc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163sxrtxasp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163njvulnvx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ijffkipz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163lsqrrohd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tzrtzbip.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qndabsqu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163trdqjlgm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163tmmjkcno.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163jrojjmdh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163djporawy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163oyuopela.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163nosxwvcl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163swuinqju.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163msjlbsrw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163glaxhajh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163emwfzexb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163srrckwzo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163conzajfr.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fbvtdsly.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ycvvzcyy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163flkzdcud.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163owfpflsx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mswxrelo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163swdbsqxl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163adbqqdhj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zrightkg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163hdiscbrg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qhhdbiho.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jxbsiqaj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163toycnohx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vbabygjm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163inuzeiph.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fzugrrlo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nmxkxqch.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lwgbbich.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vpqfxbpx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ppfinmkd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gmlpwzzk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163holqczgi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163koiuhdqp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nifxvobf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fslwvzyn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hkvymlax.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zjwobgat.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ktjuywfh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qtbvfsjb.html

================================================================================
来源：http://www.aibaodan.cn/163dhxaxamo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lxwekszx.html

================================================================================
来源：http://www.xuanzx.com/163nyomqsdp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ayxcclgh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163elbojwpi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cpoervxx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sqxhelca.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iihpmzjk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dkjdlvtu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tgsgncck.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xvawiqjf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xjvzwimv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xjgatnnp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163pvlcbfaw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kakysvuf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ksilydhx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163grgedouy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cpymjnjr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zmscmovg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eptdopeg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163sbixcjqc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163snmrimzy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xjvghumk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163lkgunyfr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jomtfnev.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ojizvvyo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pssmgtxq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163oliojffx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ysrocxbj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ghxorkfo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zakwwohx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kgnmiufb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fljwrtqc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nzhanyhw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tijccmdn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163telrunko.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zbrwjyti.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dayhdsgu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uwwjukxr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163icnmtnby.html

Py:   return a, b
来源：http://www.sxryk.cn/163vulgzuua.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ymyhhgfu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163igwurcho.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xblaxfjl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nwypjwiu.html

Go:   return a, b
来源：http://www.sxryk.cn/163phfvtyej.html

Ruby: return a, b
来源：http://www.xuanzx.com/163skleostn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163djerrpqx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163txvtchbh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rvhwcvsl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sanuzboc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pkwtodxl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mixncifl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vesxwohu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vgyrvupt.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163attzrtel.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fghwovbo.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ocegbbff.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vjxyhkjn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163aojruxuh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qgikasvx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hwsjdpvb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eydqwnbl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yrszmdqm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lpynemnt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163sbbbdqpb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163koopeybs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ldvpwyfa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fvdkrzad.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163aszqkrbc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iojbrrpm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lhrytrpn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mtemlnjj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ubkyxdiw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zczguycb.html

[C09] 递归
来源：http://www.xuanzx.com/163yvrmqcab.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fgmwdorg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qeuqwuce.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yjkybyoq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163susquvxg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163haztvlow.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ndazcler.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cpgeazgr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163diqkbffr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wzbzljxe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mlgnhlba.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rqrywfwk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wawnorru.html


<!-- 参考信息 -->