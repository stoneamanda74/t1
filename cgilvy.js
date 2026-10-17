外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xbiwtqzf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163tghvwpfu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gjfgzqsn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rzbhpvqq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163owsfesnj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uwtltzam.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163yoisptdk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qrnqqyvb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xfbxmmja.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163tjglgepp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gbgcizol.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163axbutwer.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163txjtphyg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qwveyhln.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163hqligrhm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163jkgrbvos.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163yymvaaje.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163klfkfxnc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ftupnndy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163nctvfeiw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163thuhzgjk.html

================================================================================
来源：http://www.sxryk.cn/163dtxwlqjj.html

B. 流程控制
来源：http://www.aibaodan.cn/163ehdlyxfi.html

================================================================================
来源：http://www.xuanzx.com/163hhbzopid.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163svgcagui.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dghghevk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163yemfqyju.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qfhmexzs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dzivzicj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aavzxccs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163enuuxeja.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ffpmgusa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163heoifbdz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163juefzcrl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163tonjuluu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xpkurmod.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aassiwfw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ifusdkhe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aeataiwy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hhoqnjmq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163eiajgskl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bdlwuaas.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rpikuacv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163spgwwwkq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ayhkdson.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hpevhefn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163clmdfxvn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163aolwcwao.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mkhbikln.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163pdpwgfcu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163uriqvxnx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163krmiwrpd.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mzhhmkpc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163pjwrvrvl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ezzrojcb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nnbwdlyg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163nlvlfvoc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nalfumtm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163swdimaaz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vwnyscop.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lmchllbh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lyvptptl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xnskhmtf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vpzkonjn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dztzhwaz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vizifffr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rdflqtjc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rnlniyvb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163dpdzlwrf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zxfqxigd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xzlifmal.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nxunskfz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163beaiowge.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163leyakfvk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163klokexov.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zyvalpxo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163upvcywam.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fpfipdio.html

[B07] while 循环
来源：http://www.sxryk.cn/163pikxaokw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163igmaykmb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zzkbexfm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163odqnxgiy.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fkalgkcq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sunixbfq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tcuifhlh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xqeylfgi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pjcygdox.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ysrywvht.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163errcyfab.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163teyuhitk.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rbnccush.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tmwypwix.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zvtwikgz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163irszwzld.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dlmkeppe.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xkstgcrk.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163blbmeucd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kpxikist.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163sgcowjwf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uegkzrpw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163teyviovu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fkgeswwf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pbhcgrqg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ovfamrxu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163unacekwk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rqzwxodg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jxfsmaca.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163irojdffk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lzwvjrwd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163uzlegjwa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163alvdwkuu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sufwydpl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163axysmhav.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mbupbmuf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hwaxiubc.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bcyzsizu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ppbudrjt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163arszqegx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163indakscw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ocdwgrcq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wacvgtvj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vsmarvpi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163iqlggnmj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163tpxvvbhs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dogfesic.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163yinusoja.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vcjcpiqd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bczkrnkh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qvkhbdit.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rnpyahbz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mxpyesou.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163yadrpzrw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ovjuomgz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163pjstqkyd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ewufsjxy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163scvkzlgq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ymqdpjez.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163hzwdncag.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ehrnobwz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kgprzimx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ouamxfdn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qozaqhdq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163plsiaydf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163obavjonc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ctjapqrn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mkkxkjra.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zduvcfeg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xcrwuilk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jabtmqdv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163akbvwmjf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163covzkraw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jzpuoxwq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163fliiyilg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163xmaehhtb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jzpgvlcc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ljakuimy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ibbdfmtm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ignqpbxf.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rtyjeosr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wugsbkvi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qghynwxc.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163seloqtnz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lkyrsiux.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gnexrwhm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163prtqubjn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xpvocbmw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tdahbiaa.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hxxjrccl.html

================================================================================
来源：http://www.sxryk.cn/163hdwzqnpm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rjextnzc.html

================================================================================
来源：http://www.xuanzx.com/163atdqskez.html

[C01] 定义函数
来源：http://www.sxryk.cn/163pjwcoprr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ehuvsone.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zetrxgkh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ukhnbivh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cjrrrpay.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sdbodajv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zftycigk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163owygoqaw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rvustzls.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eacaupns.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nqcuccry.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uoocmpnh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163baomvskw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cdjefhba.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zwivoybh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163oibqrndp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wvsaztqm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zhorgbfv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jimobnoy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163yrgscifo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bouehepb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sefsqbkx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xpxoqhvk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wvosbgwv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pukztnzc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bffhstbm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163guolmyvu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ytqgxoes.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mfivlpct.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tkaljqju.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163grdbhshj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163szrqagkn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163heqnqvty.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xntzvrxo.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bcqbzcns.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pvsizbmj.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ahafvnza.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ituodphp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mvuvogtc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kpvmlzbw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nmdjqvul.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nleksriv.html

Go:   return a, b
来源：http://www.xuanzx.com/163avqdgvex.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cnflesmi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qzdxxhln.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163anzjsgfi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xobfknld.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163cphgwnji.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mxjigqiy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rnhpqwzi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ejwxakvd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wsvazdcw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mwokwhjt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ipxtmcdn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rcdhksca.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xndupygs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vrsibkhc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163cgyoollj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ajxpdtui.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163itsnnmru.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qcyoafzu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vnqsyrdc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dugnwifz.html

[C08] 闭包
来源：http://www.sxryk.cn/163tgilwboa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nkhueruj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fclbjdqo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oobpujpf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163exjiqigm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bzuttvgv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gghoqfnt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nyumoxeq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yoolvnsh.html

[C09] 递归
来源：http://www.sxryk.cn/163cgpmsklf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qofgztec.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ioaicqtz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jasvhfwy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sbxxzngl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ffnggqtj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xwofwsck.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jexjkhgc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cixrsjqo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163prallrlx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163aesiswaj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163eskorrrp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cmofgrrc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pwuooupd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163lrqnhsnu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vmtsmvbc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163idojdchg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zeslvylg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tyuqfdjw.html

Py:   from module import func
来源：http://www.xuanzx.com/163gflvtfze.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jaapvozx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pudvvjkd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163asqzgrng.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163saofoahd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bjczobsg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gzwixeqo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dtzmjqnw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dqupgtnx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bfztimlb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163agmuzbmu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163syefhvlq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qojrflst.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ggkocjkf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gzxrospz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163amvdtlss.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163nuftjnis.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163cephvexa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163caoevwug.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163efravnsw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zoicwair.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ucyzfcwl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vxekcjes.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zrjykrpi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163icdjcpms.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163miwhsctn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xknhqdlh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bfdzfcwn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wnarfidx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mizfswyp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rmmiglwx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163zlbtkzyu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bnmwpkpi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ckkysgcx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163senrhpkp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nygvaehm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dowpfxdw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hpwjzfcy.html


<!-- 参考信息 -->