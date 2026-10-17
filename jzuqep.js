外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lwxavhdp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dsxtowow.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zxjmicft.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163smawkigy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ustiubja.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nlwravae.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163mealapdz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vvuwoted.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ngaocyoc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xlqnrrze.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dcxtqbzz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163pazwdntt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xwothxjd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163mighhlez.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163rxucdnmc.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163fzrdnkik.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fposhnxo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163hfuixhvr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rjpzbnlw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163sgalsdun.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ketcyrmn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lskygjsx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163zcroxnrz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163yqtgqeac.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pojrmfgd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vkmybjch.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ewshayui.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jihmfulc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rwdxgmqz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163chozhxsz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jtrkbxcv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mgswyfce.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ywzzocdj.html

================================================================================
来源：http://www.sxryk.cn/163efoelopk.html

B. 流程控制
来源：http://www.sxryk.cn/163qxuwiexv.html

================================================================================
来源：http://www.aibaodan.cn/163kmzdoypl.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bbiuzpuw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163megdeknq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ezlhthpm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rjehtkyq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lxjxlmau.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ratrtlqs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163rfjulneu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163oneetkwz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163chvlxzhm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qzybxhsc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yzxpfwro.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163hfojbdnp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bbuoacpy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163eyjjfrmm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dblfihwz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163jfyrpwyz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163chmhorom.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fcgbbzom.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fxmimjai.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163wdyazdvm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bfxjryeo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fwymtjit.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gnwjnqfj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pxrbmhgi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163obrpzsfb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163keasfqfk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ugkknzdu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kwtouxyi.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nwbaztez.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163qwuufprv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vfpegknm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uebuqbka.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163uukogeud.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163njemyfod.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kacrracl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ntixgzsf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ezbqqyic.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dflzlcmf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wyirbbkv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mjycrxmt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tkkmylly.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bavempqz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kbzforka.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163pbaslrmj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jisjzubf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163bacbveps.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ghnyiagw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163giygbxgw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163mfixaxtz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tctmqyha.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vtwktria.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bpaocrgt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163gpmaqbtt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lrstbxbi.html

[B07] while 循环
来源：http://www.sxryk.cn/163eqbogjxi.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163afipuvnf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nzmhcrum.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vpsqqlok.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rezpmlhz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163smudzyyl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163alduxrnm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163evvukcpu.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zseemsyq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bkwyuhko.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qxhplnce.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bjjvahtd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bernqrdn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sfxtbxbe.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jebflvat.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hpdklnhm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ytximjnn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hzerjtxz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163mrejwdku.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163znjauvbt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163yqsdqqvl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cccfiptl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tlgajwpr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tbcfkmer.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vswxzvdc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ojujlyvr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jzamxxhw.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wzjvzbxl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163difozndf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163csghmxvb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ploajlhn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163blnmympk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yyksfkrf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cscdijzt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163iwjhtzkm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zasgmyde.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163dkarmwqa.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sfiaeigs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163txjiqxbz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kmuaxrox.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ouwiqkfp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163rlbasavs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163maasgxiv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mfoaefhj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tavvyivy.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zcgkeakc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zmmkldxw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rumzhswq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ajcfdtxb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xpbhldbi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qqintyjx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mqxvgzfd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qzpzyoww.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xpbfivxh.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163icjztifz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wiihpxmq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163nhzixkqk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cdvvvnxf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jtiutfdr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ujxdrwdi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163yolmpsty.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ujgsvamb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163yeykfibd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xcgxgqnx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163yqrwxnkg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qcnxyvsx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163trrwhcxu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ljbakrbw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163eldzchfv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ifkkcrri.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oofbtdvu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lfqrfgnp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ukdumbcq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hxyiapce.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163gnxmwvzr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bveeejvn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qhcoavav.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xfytypka.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zvkowbki.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qsjvytnl.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kpvaudaw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bbscjhwa.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nqzkbttw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163prsiakzu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ylqhozds.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ewvgoofk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163nmsihsid.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fylchiai.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kllfyyum.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mftkbldn.html

================================================================================
来源：http://www.aibaodan.cn/163ttpjlden.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yhtbcque.html

================================================================================
来源：http://www.sxryk.cn/163fcdlhpku.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jtwydyrv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wctzkxgg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vnxefmky.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hltmusjw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163esoialzh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rslowomb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dhkbcxrs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zkuambac.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vmwdvixj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fkxeaqtl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zwnjppla.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zvqniumj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163sijadmtb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vsxttmxs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tcqpoidj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wozvuedk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zqcyiczy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qxwiunwk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163opmxghdp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fjvximoy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lbrrroyr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163drjnfscj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sbecmlfi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pepzxrbr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163iybqsbhb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163losgcfal.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fcceivai.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zgcppaqj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kgubhyrq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rpvhiomv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163stbnczvx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163irpmvifs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mnnlemwv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nwfibrye.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bmgunyym.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gdqqcgzy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jmkyzhtu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fqhjcvtb.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163omrsxqtu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163yavjfiji.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dibbcbui.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163etrhpzch.html

Go:   return a, b
来源：http://www.aibaodan.cn/163cbwugied.html

Ruby: return a, b
来源：http://www.sxryk.cn/163cfvmxkpm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ckqtwbmx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ykylibxx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zcydxaru.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lwwifbyz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163igsbplvg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cmogwkei.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lqgnwgso.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kwihqckm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hjyvjygk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dbcwzzwt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163iyqkwncd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zyyjmoyf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163eyjqsyct.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bhhainug.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dvzhejhr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cgxhvrii.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ndkhtfbo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kioeikgf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163adctqwdh.html

[C08] 闭包
来源：http://www.aibaodan.cn/163cnkifcml.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bymsqmve.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163uypqnouc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163csizhnky.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kjnkinnh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fttjcgdi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hjvcozlp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zptlexwo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wrcycrjo.html

[C09] 递归
来源：http://www.aibaodan.cn/163mesjzlgz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163itpusqne.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163prfsyvwm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bfexhjzk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ciiphygl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dnhpbvmr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163plhnfore.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163sgpidpca.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163sbvgozup.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cugzcxhc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dasradoj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cprvkwlm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mxaqwgdq.html

TS:   同 JS
来源：http://www.sxryk.cn/163ujvoglzs.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163zpbidiyt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163uwbdsalh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jbsuewfx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163adpqitwc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zodignxo.html

Py:   from module import func
来源：http://www.xuanzx.com/163pewyewsf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wrryfirc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ridprsax.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pbkgebep.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jlzifels.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mdmahxcy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163foskhfyl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163thkiueno.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xtyvynxr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cqpfzxbp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fzqdvmlw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163oebkmxcj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163twpqytex.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163kxymmfvw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163yipxcaoj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163znuzufvy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163pwrubjpk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fdcwefbi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163fwxptugk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tuygpofh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rxidqgdt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mmjxvahw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pdwjiimx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fighqbda.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163bqtbaiai.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xzonnanr.html


<!-- 参考信息 -->