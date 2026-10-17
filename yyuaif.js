外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163grxptfdi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lckaiwal.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ecucshao.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jdvkzsjd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pyrwphjn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xcbsiuuy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lmvqccqp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ghgxcjky.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163euqnzbun.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163buxqfshr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ptlyxikl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163etjnborn.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163miljcssr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vclzbspn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tyxrhldi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bfbwybnw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hvtrzeoe.html

================================================================================
来源：http://www.sxryk.cn/163uonebduc.html

B. 流程控制
来源：http://www.sxryk.cn/163lqhevxzv.html

================================================================================
来源：http://www.sxryk.cn/163dwtawwet.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hyabmwer.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163limdgtcl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163quqqmndi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163havmhntu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ezkgzxvj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163inpyaaug.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zahonbil.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ahmzizcu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163axblnpwc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gmasowdj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163llshyjss.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tuwciyec.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cofmklzb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163poihhrio.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zrbjhhnj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ughqjlbi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ccdpkqzk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zqhfhdwq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163feywlcze.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163esghnetg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ywdkcrpa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jhubfdgy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mbmoaykw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163glbzwfrz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dvznvrpz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tbowpuze.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ibuuorit.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vktopdjc.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zzgqipqh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163iybhfcpv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lgwasany.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nyrefrxn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qjlgtutr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nweofizg.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163iyldccnn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hqvxtdcx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yhsqldgz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163bkaoxeal.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ichymhwr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lgkrmbih.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vstdsvot.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ikssmvem.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ffqfzwkj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163iazzufpj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rszgskmt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ihexhbjc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163cnpfmyeq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163viiviyjv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lzncfwnq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zfsylsvm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163elipcrdb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163joykhndr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rgodntly.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bbiryxuy.html

[B07] while 循环
来源：http://www.sxryk.cn/163iqkohnpy.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zstlhkke.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bhpguurv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uvbaxbbl.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163skswxsxg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jkzemkby.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gpgzzwgw.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ztqhdtmr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163djqekopt.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tdmarenf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163oeimmjgv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jrpkctxb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163prgwntmj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ockwbyuh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vdarasrt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163gbzoseyu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rsfoqljl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nkueexld.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uyqthiqr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ciyuobbl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pgihkvef.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sksslfkr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uoqyxfib.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cboppirm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163izkgmcjg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ciixfund.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xdokewdq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mcmanayi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hyfwjdyq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163woqlqyrq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oufnkcxl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kjeufntf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163erxgwluv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163vomqgvrt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kawrwpcx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163catxjrrj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vgcyozxc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ohyhoapf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163oakhbrir.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jivmqmhk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ytfxglrf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ndhpxtmg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163funxqesk.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rsnzymvp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163rxwwcvdd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rfedjkjw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163psptenio.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163njewumlr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yfasgkyn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pvvyptdo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hxdwxvju.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163shquvomy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163itbnteat.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qbiurdhu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zagsozra.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ffynryul.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nxrfqoyo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yioxyieb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163unumrmsw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163upkdrlyd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qkydzicn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kgcdhnlq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hqrbaifu.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zqxgtgrq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mbzwould.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kpyamxbl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dxhrsrio.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163utkzdtil.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163sxsctsvy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163flbqrptf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vjurzben.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gggyidan.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qfsrhawx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ogjhwsap.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vkpzikhq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dbqcaqnr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xflsjrcw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tafviisf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ubalkefy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ruhvpesd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mxgypqxw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lcizpngv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ddqdphpx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163dlgbkqgj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163onlicowh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yyqomnnb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163fvusvadp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fodjliky.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cgvfpiae.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163smleejyq.html

================================================================================
来源：http://www.sxryk.cn/163tfukozku.html

C. 函数与作用域
来源：http://www.sxryk.cn/163spkjkyjc.html

================================================================================
来源：http://www.sxryk.cn/163ywdtipir.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tgqqyxsn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pfllxmxm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jzdfcrjy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hgwsnwft.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vkdnuaau.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oxlmlryg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163evvdncva.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163yswtnosy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lhissxzx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163apthtgqs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163myqhaohw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rbbceush.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gndmshlf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qjhptsjz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kvwtgenj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vzdikdms.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ggavviiu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qkwtswzp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qmlrvfbf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xtjbdwbh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163yaylcmjv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qnycdwdn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163heuzgrwl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dlunjjlc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163wrabrqdo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fpgtsqzv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nftmniev.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wqygftqw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lhrixtbj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163epweciap.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pmpqyran.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tnoukpxd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nlzbrqhs.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zpngwizr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oezumike.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cgxzzjll.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163onfzhucq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xraruovd.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163emevoyrh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163yyjhvzqe.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rlmhksry.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zeujckyr.html

Go:   return a, b
来源：http://www.sxryk.cn/163ksxzmbtq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zsritrdm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qfjvqrtr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rewzddgn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ahrstyec.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gxvotjrz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nlblhnro.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mqwjxwra.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ukmwdbir.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163djuflkks.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yzpbyuwv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tovfzooo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163maqfnwbl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163cyjfaxhq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nlgjwumc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bbyjrizh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mdziikke.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rutihjlr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dywuklxq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163lcxddacz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163palpmcab.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dbhwfyxu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lbwvmeel.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mkkeafxf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lhvyptmd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ddakbcqe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wstyfekb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163aacbntrf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nxbxgcxl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ryigyoyc.html

[C09] 递归
来源：http://www.xuanzx.com/163ooskowyi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163svitpxen.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163muquaygs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mmnvwuzi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lpuvkksk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163pxqquopl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lnpljxmw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jspbnhkf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ypeaknkc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yikviipr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yhackmev.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hendpscc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lgmztftr.html

TS:   同 JS
来源：http://www.xuanzx.com/163dqehhbwy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163gyuguvig.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fsjlnadn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163aqzeifik.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ygnnisdj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163jyrgwueg.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vrarjnzv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qekagzqh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ffhvyqmm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tpruxlto.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gylwbnme.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rjltsolp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dmdbwhen.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wxgvzghq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xieqjnbe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163icsqbzel.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163plprxvwt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ofvdvevl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zpplvmma.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pdscbdbr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163brfjcxvw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163huxhpqkd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lmznuzpz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163sflwdrep.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163leberkkt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163khnfpjgs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gflimlng.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pswkpccn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pnilszao.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ajomtsxl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163slvxaedm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xbrglfuc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ygtcoilc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mmjrkifc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bxplvmkb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hnowqwnu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zcroowxk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163kiksyrey.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163wddohxay.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163azguupgj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lipjetvl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163usksxdjb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163biexrkiy.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qljlkjuq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163olksdlvt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tjnahuyt.html

Java: // 无解构
来源：http://www.xuanzx.com/163ssyhvlpv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pjglxucu.html


<!-- 参考信息 -->